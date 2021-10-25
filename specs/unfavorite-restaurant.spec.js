import FavoriteDB from '../src/scripts/data/favorite-idb';
import TestFactories from './helpers/test-factories';

const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
};

describe('Unfavorite The Restaurant', () => {
    beforeEach(async () => {
        addFavoriteButtonContainer();
        await FavoriteDB.put({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteDB.delete(1);
    });

    it('Should display unfavorite button when the restaurant has been favorited', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        expect(document.querySelector('#unfavorite')).toBeTruthy();
    });

    it('Should not display favorite button when the restaurant has been favorited', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        expect(document.querySelector('#favorite-this')).toBeFalsy();
    });

    it('Should be able to remove favorited restaurant from the list', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        document.querySelector('#unfavorite').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAll()).toEqual([]);
    });

    it('Should not throw error if the unfavorited restaurant is not in the list', async () => {
        await TestFactories.createFavoriteButtonPresenter({ id: 1 });
        await FavoriteDB.delete(1);
        document.querySelector('#unfavorite').dispatchEvent(new Event('click'));
        expect(await FavoriteDB.getAll()).toEqual([]);
    });

    it('Should not remove a restaurant from favorite list when it has no id', async () => {
        await TestFactories.createFavoriteButtonPresenter({});
        expect(document.querySelector('#unfavorite')).toBeFalsy();
        expect(await FavoriteDB.getAll()).toEqual([{ id: 1 }]);
    });
});
