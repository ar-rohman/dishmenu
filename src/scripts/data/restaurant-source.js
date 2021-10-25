import API_ENDPOINT from '../globals/api-endpoint';
import FetchApi from '../globals/fetch-api';

class RestaurantSource {
    static listRestaurant() {
        return FetchApi(API_ENDPOINT.LIST);
    }

    static detailRestaurant(id) {
        return FetchApi(API_ENDPOINT.DETAIL(id));
    }

    static addReview(data) {
        return FetchApi(API_ENDPOINT.REVIEW, data);
    }
}

export default RestaurantSource;
