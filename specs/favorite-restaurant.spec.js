import FavoriteDB from '../src/scripts/data/favorite-idb';
import TestFactories from './helpers/test-factories';

describe('Favorite A Restaurant', () => {
    const addFavoriteButttonContainer = () => {
        document.body.innerHTML = '<div id="favorite-container"></div>';
    };

    beforeEach(() => {
        addFavoriteButttonContainer();
    });

    it('Should show the favorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        expect(document.querySelector('#favorite-this')).toBeTruthy();
    });

    it('Should not show the unfavorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        expect(document.querySelector('#unFavorite')).toBeFalsy();
    });

    it('Should be able to favorite the restaurant ', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        document.querySelector('#favorite-this').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteDB.getById(1);
        expect(restaurant).toEqual({ id: 1 });
        FavoriteDB.delete(1);
    });

    it('Should not add a restaurant again when its already favorited', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        await FavoriteDB.put({ id: 1 });
        document.querySelector('#favorite-this').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAll()).toEqual([{ id: 1 }]);
        FavoriteDB.delete(1);
    });

    it('Should not add a restaurant when it has no id', async () => {
        await TestFactories.createFavoriteButtonPresenter({});
        document.querySelector('#favorite-this').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAll()).toEqual([]);
    });
});
