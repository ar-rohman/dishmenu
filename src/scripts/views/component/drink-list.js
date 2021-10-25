class DrinkList extends HTMLElement {
    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class=food-box>
                <div class="food-icon-bg">
                    <svg viewBox="-3.87 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-15.874 -12)">
                        <path d="M20.252,22l2.381,20H33.367l2.381-20Zm-1.126-2a1,1,0,0,0-.993,1.118l2.514,21.118A2,2,0,0,0,22.633,44H33.367a2,2,0,0,0,1.986-1.764l2.514-21.118A1,1,0,0,0,36.874,20Z" fill="currentColor" fill-rule="evenodd"/>
                        <path d="M38.124,20H17.876l1.744-4.7A2,2,0,0,1,21.5,14H34.5a2,2,0,0,1,1.875,1.3ZM17.876,22A2,2,0,0,1,16,19.3l1.744-4.7A4,4,0,0,1,21.5,12H34.5a4,4,0,0,1,3.75,2.607L40,19.3A2,2,0,0,1,38.124,22Z" fill="currentColor" fill-rule="evenodd"/>
                        <path d="M36,28H20V26H36Z" fill="currentColor" fill-rule="evenodd"/>
                        <path d="M36,34H20V32H36Z" fill="currentColor" fill-rule="evenodd"/>
                        </g>
                    </svg>
                </div>
                <p>${this._drink.name}</ps>
            </div>
        `;
    }
}

customElements.define('drink-list', DrinkList);
