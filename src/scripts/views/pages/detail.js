import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteInitiator from '../../utils/favorite-initiator';
import '../component/back-section';
import '../component/restaurant-detail';
import '../component/skeleton-detail';

const Detail = {
    async render() {
        return `
            <back-section></back-section>
            <h2 class="pt-4">Restaurant Detail</h2>
            <div id="restaurant" class="restaurant-container">
                <skeleton-detail></skeleton-detail>
            </div>
            <div id="favorite-container"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseUrl();
        const restaurantDetail = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = '';
        if (restaurantDetail.error) {
            const restaurantError = document.createElement('error-page');
            const { message } = restaurantDetail;
            restaurantError.message = message;
            restaurantContainer.appendChild(restaurantError);
        } else {
            const { restaurant } = restaurantDetail;
            const restaurantDetailElement = document.createElement('restaurant-detail');
            restaurantDetailElement.restaurant = restaurant;
            restaurantContainer.appendChild(restaurantDetailElement);

            const dataRestaurant = {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
            };

            const favoriteContainer = document.getElementById('favorite-container');
            FavoriteInitiator.init({ dataRestaurant, favoriteContainer });
        }
    },
};

export default Detail;
