class SkeletonList extends HTMLElement {
    connectedCallback() {
        this.for = this.getAttribute('for');
        this.render();
    }

    render() {
        const html = `
            <div class="skeleton-list">
                <div class="skeleton-card">
                    <div class="skeleton-img">
                        <div class="skeleton-loading"></div>
                    </div>
                    <div class="skeleton-content">
                        <div class="skeleton-title">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-description">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-description">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-location-star">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-location-star">
                            <div class="skeleton-loading"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        for (let i = 0; i < this.for; i += 1) {
            this.innerHTML += html;
        }
    }
}

customElements.define('skeleton-list', SkeletonList);
