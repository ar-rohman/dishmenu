import RestaurantSource from '../../data/restaurant-source';
import '../component/hero-element';
import '../component/restaurant-list';
import '../component/error-page';
import '../component/skeleton-list';

const List = {
    async render() {
        return `
        <hero-element></hero-element>
        <h2>Explore Restaurant</h2>
        <div id="restaurant">
            <skeleton-list class="restaurant" for="20"></skeleton-list>
        </div>
        `;
    },

    async afterRender() {
        const restaurantList = await RestaurantSource.listRestaurant();
        const restaurantsContainer = document.querySelector('#restaurant');
        restaurantsContainer.innerHTML = '';
        if (restaurantList.error) {
            const restaurantContent = document.createElement('error-page');
            const { message } = restaurantList;
            restaurantContent.message = message;
            restaurantsContainer.appendChild(restaurantContent);
        } else {
            const { restaurants } = restaurantList;
            restaurantsContainer.classList.add('restaurant');
            restaurants.forEach((restaurant, index) => {
                const restaurantContent = document.createElement('restaurant-list');
                restaurantContent.restaurant = restaurant;
                restaurantContent.index = index;
                restaurantsContainer.appendChild(restaurantContent);
            });
        }
    },
};

export default List;
