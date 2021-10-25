import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoriteDB = {
    async getById(id) {
        if (!id) {
            return false;
        }
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAll() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async put(restaurant) {
        if (!restaurant.hasOwnProperty.call(restaurant, 'id')) {
            return false;
        }
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },
    async delete(id) {
        if (!id) {
            return false;
        }
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteDB;
