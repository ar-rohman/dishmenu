import 'regenerator-runtime';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#drawer');
const content = document.querySelector('#mainContent');
const header = document.getElementsByTagName('header')[0];
const home = document.getElementById('base');
const favorite = document.getElementById('favorite');
const about = document.getElementById('about');
const listLink = document.querySelectorAll('#list-link li a');
const skipLink = document.getElementById('skip-link');

const clickedLinks = [home, favorite, about];

const app = new App({
    hamburger,
    navigation,
    content,
    clickedLinks,
    listLink,
    header,
    skipLink,
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
