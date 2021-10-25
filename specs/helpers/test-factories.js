import FavoriteInitiator from '../../src/scripts/utils/favorite-initiator';

const TestFactories = {
    async createFavoriteButtonPresenter(dataRestaurant) {
        await FavoriteInitiator.init({
            dataRestaurant,
            favoriteContainer: document.getElementById('favorite-container'),
        });
    },
};

export default TestFactories;
