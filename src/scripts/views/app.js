import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import ActiveMenu from '../utils/active-menu';
import HeaderVisibility from '../utils/header-visibility';

class App {
    constructor({
        hamburger,
        navigation,
        content,
        clickedLinks,
        listLink,
        header,
        skipLink,
    }) {
        this._hamburger = hamburger;
        this._navigation = navigation;
        this._content = content;
        this._clickedLinks = clickedLinks;
        this._listLink = listLink;
        this._header = header;
        this._skipLink = skipLink;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            hamburger: this._hamburger,
            navigation: this._navigation,
        });

        ActiveMenu.click({
            clickedLinks: this._clickedLinks,
            listLink: this._listLink,
            navigation: this._navigation,
        });
    }

    async renderPage() {
        const url = UrlParser.parseUrlWithCombiner();
        HeaderVisibility.load({
            header: this._header,
            url,
            skipLink: this._skipLink,
        });
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;
