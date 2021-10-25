class AddReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set restaurant(restaurant) {
        this._id = restaurant.id;
        this._name = restaurant.name;
    }

    render() {
        this.innerHTML = `
            <h2>Review Restaurant</h2>
            <div class="add-review">
                <div class="add-review-content">
                    <div class="title">Write your review about ${this._name} restaurant</div>
                    <form id="review-form" class="add-review-form">
                        <div class="input-group">
                            <input type="hidden" name="id">
                            <label for="restaurant-name">Name</label>
                            <input type="text" id="restaurant-name" required>
                        </div>
                        <div class="input-group">
                            <label for="restaurant-review">Review</label>
                            <textarea id="restaurant-review" rows="3" required></textarea>
                        </div>
                        <div class="btn">
                            <button id="cancel" class="cancel">Cancel</button>
                            <button type="submit" class="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('add-review', AddReview);
