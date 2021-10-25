import CONFIG from '../globals/config';
import RestaurantSource from '../data/restaurant-source';

const ReviewInitiator = {
    async init({ id, name, review }) {
        this._id = id;
        this._name = name;
        this._review = review;

        const result = await this._sendReview();
        return result;
    },

    async _sendReview() {
        const data = {
            id: this._id,
            name: this._name,
            review: this._review,
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.KEY,
            },
            body: JSON.stringify(data),
        };

        const reviewStatus = await RestaurantSource.addReview(options);
        return reviewStatus;
    },
};

export default ReviewInitiator;
