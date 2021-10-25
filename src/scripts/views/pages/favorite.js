import FavoriteDB from '../../data/favorite-idb';

const Favorite = {
    async render() {
        return `
            <h2 class="pt-5">Favorited Restaurant</h2>
            <div id="restaurant">
                <skeleton-list class="restaurant" for="6"></skeleton-list>
            </div>  
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteDB.getAll();
        const restaurantsContainer = document.querySelector('#restaurant');
        restaurantsContainer.classList.add('restaurant');
        restaurantsContainer.innerHTML = '';
        if (Object.keys(restaurants).length === 0) {
            restaurantsContainer.innerHTML = 'No data available';
            const spinner = document.getElementById('spinner');
            spinner.classList.add('hidden');
        } else {
            restaurants.forEach((restaurant, index) => {
                const restaurantContent = document.createElement('restaurant-list');
                restaurantContent.restaurant = restaurant;
                restaurantContent.index = index;
                restaurantsContainer.appendChild(restaurantContent);
            });
        }
    },
};

export default Favorite;
