class SkeletonDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML += `
            <div class="skeleton-detail">
                <div class="skeleton-wraper">
                    <div class="skeleton-img">
                        <div class="skeleton-loading"></div>
                    </div>
                    <div class="skeleton-content">
                        <div class="skeleton-title">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-desc">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-desc">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-desc">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-desc">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-address">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-address">
                            <div class="skeleton-loading"></div>
                        </div>
                    </div>
                </div>
                <div class="skeleton-menu">
                    <div class="skeleton-menu-title">
                        <div class="skeleton-loading"></div>
                    </div>
                    <div class="skeleton-menu-box">
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                    </div>
                    <div class="skeleton-menu-title">
                        <div class="skeleton-loading"></div>
                    </div>
                    <div class="skeleton-menu-box">
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                        <div class="skeleton-menu-content">
                            <div class="skeleton-loading"></div>
                        </div>
                    </div>
                </div>
                <div class="skleton-review"></div>
            </div>
        `;
    }
}

customElements.define('skeleton-detail', SkeletonDetail);
