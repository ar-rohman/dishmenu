class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="inner">
                    <h1 class="title">Makan Enak, Makan Hemat, Cari di <span>dishmenu.</span></h1>
                    <p class="tagline">
                        Rayakan momen spesial lebaran dengan lezatnya aneka makanan dengan cita rasa asli indonesia. Tunggu apa lagi? Yuk temukan restoran favoritmu sekarang!
                    </p>
                </div>
            </div>
        `;
    }
}

customElements.define('hero-element', HeroElement);
