import RestaurantSource from '../../data/restaurant-source';
import ReviewInitiator from '../../utils/review-initiator';
import UrlParser from '../../routes/url-parser';
import '../component/add-review';
import '../component/back-section';
import '../component/error-page';
import '../component/skeleton-review';

const Review = {
    async render() {
        return `
            <back-section></back-section>
            <div id="restaurant" class="pt-3">
                <skeleton-review></skeleton-review>
            </div>
            
        `;
    },

    async afterRender() {
        const url = UrlParser.parseUrl();
        const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
        const restaurantReview = document.querySelector('#restaurant');
        restaurantReview.innerHTML = '';
        const reviewElement = document.createElement('add-review');
        reviewElement.restaurant = restaurant;
        restaurantReview.appendChild(reviewElement);

        const cancelBtn = document.getElementById('cancel');
        const reviewForm = document.getElementById('review-form');
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.history.back();
        });

        reviewForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const reviewValue = document.getElementById('restaurant-review').value;
            const nameValue = document.getElementById('restaurant-name').value;
            const idValue = restaurant.id;

            const sendReview = await ReviewInitiator.init({
                id: idValue,
                name: nameValue,
                review: reviewValue,
            });

            if (sendReview.error) {
                reviewElement.remove();
                const errorPage = document.createElement('error-page');
                const { message } = sendReview;
                errorPage.message = message;
                restaurantReview.appendChild(errorPage);
            } else {
                await RestaurantSource.detailRestaurant(url.id);
                window.history.back();
            }
        });
    },
};

export default Review;
