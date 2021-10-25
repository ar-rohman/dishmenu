class ErrorPage extends HTMLElement {
    set message(message) {
        this._message = message;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="error-page">
                <div class="box">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="content">
                        <div class="title">Oops, something went wrong!</div>
                        <p>${this._message}<p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('error-page', ErrorPage);
