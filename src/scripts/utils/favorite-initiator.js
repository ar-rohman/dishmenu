import FavoriteDB from '../data/favorite-idb';
import '../views/component/favorite-btn';
import '../views/component/favorited-btn';

const FavoriteInitiator = {
    async init({ dataRestaurant, favoriteContainer }) {
        this._restaurant = dataRestaurant;
        this._favoriteContainer = favoriteContainer;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;
        if (await this._isRestaurantExist(id)) {
            this._renderHasBeenFavorite();
        } else {
            this._renderFavorite();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteDB.getById(id);
        return !!restaurant;
    },

    _renderFavorite() {
        this._favoriteContainer.innerHTML = '';
        const favoriteBtn = document.createElement('favorite-btn');
        this._favoriteContainer.appendChild(favoriteBtn);
        const favoriteThis = document.getElementById('favorite-this');
        favoriteThis.addEventListener('click', async () => {
            await FavoriteDB.put(this._restaurant);
            this._renderButton();
        });
    },

    _renderHasBeenFavorite() {
        this._favoriteContainer.innerHTML = '';
        const favoritedBtn = document.createElement('favorited-btn');
        this._favoriteContainer.appendChild(favoritedBtn);
        const unFavorite = document.getElementById('unfavorite');
        unFavorite.addEventListener('click', async () => {
            await FavoriteDB.delete(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default FavoriteInitiator;
