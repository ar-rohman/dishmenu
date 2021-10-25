class FoodList extends HTMLElement {
    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class=food-box>
                <div class="food-icon-bg">
                    <svg viewBox="0 -4 36 36" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-10 -14)">
                            <path d="M34,16H22a6,6,0,0,0-6,6v1H40V22A6,6,0,0,0,34,16ZM22,14a8,8,0,0,0-8,8v2a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V22a8,8,0,0,0-8-8Z" fill="currentColor" fill-rule="evenodd"/>
                            <path d="M18,40H38a4,4,0,0,0,4-4V35H14v1A4,4,0,0,0,18,40Zm20,2a6,6,0,0,0,6-6V34a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v2a6,6,0,0,0,6,6Z" fill="currentColor" fill-rule="evenodd"/>
                            <path d="M42,25H14a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4ZM14,23a4,4,0,0,0,0,8H42a4,4,0,0,0,0-8Z" fill="currentColor" fill-rule="evenodd"/>
                            <path d="M17,31v2H39V31Zm-1-2a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H40a1,1,0,0,0,1-1V30a1,1,0,0,0-1-1Z" fill="currentColor" fill-rule="evenodd"/>
                            <path d="M39,23,28.673,32.389a1,1,0,0,1-1.345,0L17,23Z" fill="#fff"/>
                            <path d="M39,23H17l10.327,9.389a1,1,0,0,0,1.345,0Zm-5.173,2H22.173L28,30.3Z" fill="currentColor" fill-rule="evenodd"/>
                        </g>
                    </svg>
                </div>
                <p>${this._food.name}</p>
            </div>
        `;
    }
}

customElements.define('food-list', FoodList);
