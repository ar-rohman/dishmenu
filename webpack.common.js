const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');
const path = require('path');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk-bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                cssnano(),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: 'fonts',
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                    globOptions: {
                        // ignore: ['**/images/heros/**'],
                    },
                },
            ],
        }),
        new WebpackPwaManifest({
            name: 'dishmenu Restaurant Catalouge',
            short_name: 'dishmenu',
            description: 'Free Catalouge Restaurant for you',
            start_url: '/index.html',
            background_color: '#ffffff',
            theme_color: '#12acec',
            ios: true,
            icons: [
                {
                    src: path.resolve('src/public/images/icon.png'),
                    sizes: [72, 96, 128, 144, 152, 192, 384, 512],
                    purpose: 'any maskable',
                    destination: path.join('images', 'icons'),
                    ios: true,
                },
            ],
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new HtmlWebpackInjectPreload({
            files: [
                {
                    match: /.*\.woff2$/,
                    attributes: {
                        as: 'font',
                        type: 'font/woff2',
                        crossorigin: true,
                    },
                },
                {
                    match: /.*\.woff$/,
                    attributes: {
                        as: 'font',
                        type: 'font/woff',
                        crossorigin: true,
                    },
                },
                {
                    match: /.*\.css$/,
                    attributes: {
                        as: 'style',
                    },
                },
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
        new CleanWebpackPlugin(),
        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(__dirname, 'src/scripts/sw.js'),
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000, // 20 kb
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};
