import CONFIG from '../../globals/config';
import './category-list';
import './drink-list';
import './food-list';
import './review-list';

class RestaurantDetail extends HTMLElement {
    connectedCallback() {
        const { categories } = this._restaurant;
        categories.forEach((category) => {
            const categoryElement = document.createElement('category-list');
            const categoryList = document.getElementById('category-list');
            categoryElement.category = category;
            categoryList.appendChild(categoryElement);
        });

        const { foods } = this._restaurant.menus;
        foods.forEach((food) => {
            const foodElement = document.createElement('food-list');
            const foodList = document.getElementById('food-list');
            foodElement.food = food;
            foodList.appendChild(foodElement);
        });

        const { drinks } = this._restaurant.menus;
        drinks.forEach((drink) => {
            const drinkElement = document.createElement('drink-list');
            const drinkList = document.getElementById('drink-list');
            drinkElement.drink = drink;
            drinkList.appendChild(drinkElement);
        });

        const { customerReviews } = this._restaurant;
        customerReviews.forEach((review) => {
            const reviewElement = document.createElement('review-list');
            const reviewList = document.getElementById('review-list');
            reviewElement.review = review;
            reviewList.appendChild(reviewElement);
        });
    }

    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="restaurant-detail">
                <img src="${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}" alt="${this._restaurant.name}" height="384">
                <div class="detail">
                    <div class="detail-title">${this._restaurant.name}</div>
                    <div class="detail-icon">
                        <svg id="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <p>${this._restaurant.city}</p>
                        <p> | </p>
                        <svg  id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p>${this._restaurant.rating} (${this._restaurant.customerReviews.length} reviews)</p>
                    </div>
                    <div class="detail-desc">
                        <p>Description</p>
                        ${this._restaurant.description}
                    </div>
                    <div class="detail-desc">
                        <p>Address</p>
                        ${this._restaurant.address}
                    </div>
                    <div id="category-list" class="detail-desc">
                        <p>Categories</p>    
                    </div>
                </div>
            </div>
            <div class="restaurant-menu">
                <div class="menu-title">Menu</div>
                <div class="food-title">Foods</div>
                <div id="food-list" class="menu-box"></div>
                <div class="food-title">Drinks</div>
                <div id="drink-list" class="menu-box"></div>
            </div>
            <div id="review-list" class="review-list">
                <div class="review-title">Reviews</div>
                <div class="add-review-btn">
                    <a href="#/review/${this._restaurant.id}" id="write-review">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Write your review
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('restaurant-detail', RestaurantDetail);
