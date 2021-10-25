class SkeletonReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="skeleton-review">
                <div class="skeleton-review-title">
                    <div class="skeleton-loading"></div>
                </div>
                <div class="skeleton-review-box">
                    <div class="skeleton-review-content">
                        <div class="skeleton-review-text">
                            <div class="skeleton-loading"></div>    
                        </div>
                        <div class="skeleton-review-label">
                            <div class="skeleton-loading"></div>    
                        </div>
                        <div class="skeleton-review-input">
                            <div class="skeleton-loading"></div>    
                        </div>
                        <div class="skeleton-review-label">
                            <div class="skeleton-loading"></div>    
                        </div>
                        <div class="skeleton-review-input">
                            <div class="skeleton-loading"></div>    
                        </div>
                        <div class="skeleton-review-btn">
                            <div class="skeleton-review-cancel">
                                <div class="skeleton-loading"></div>
                            </div>
                            <div class="skeleton-review-submit">
                                <div class="skeleton-loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('skeleton-review', SkeletonReview);
