const ActiveMenu = {
    click({ clickedLinks, listLink, navigation }) {
        clickedLinks.forEach((clickedLink) => {
            this._active({ clickedLink, listLink, navigation });
        });
    },

    _active({ clickedLink, listLink, navigation }) {
        const localStoregeActiveMenu = localStorage.getItem('menu-active');
        if (localStoregeActiveMenu === clickedLink.id) {
            this._addOrRemoveActive(listLink, clickedLink);
            localStorage.setItem('menu-active', clickedLink.id);
        }
        clickedLink.addEventListener('click', (event) => {
            localStorage.setItem('menu-active', clickedLink.id);
            this._addOrRemoveActive(listLink, clickedLink);
            event.stopPropagation();
            navigation.classList.remove('open');
        });
    },

    _addOrRemoveActive(listLink, clickedLink) {
        listLink.forEach((node) => {
            node.classList.remove('active');
        });
        clickedLink.classList.add('active');
    },
};

export default ActiveMenu;
