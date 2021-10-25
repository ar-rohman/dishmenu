class CategoryList extends HTMLElement {
    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="category">${this._category.name}</div>
        `;
    }
}

customElements.define('category-list', CategoryList);
