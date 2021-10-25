const HeaderVisibility = {
    load({ header, url, skipLink }) {
        if (url.includes(':id')) {
            header.classList.remove('fixed');
            header.classList.add('hidden');

            this._removeSkipLink(skipLink);
        } else {
            header.classList.add('fixed');
            header.classList.remove('hidden');

            this._addSkipLink(skipLink);
        }
    },

    _addSkipLink(skipLink) {
        const link = document.createElement('a');
        const linkText = document.createTextNode('Skip to content');
        link.appendChild(linkText);
        link.href = '#restaurant-0';
        link.className = 'skip-link';

        if (!skipLink.hasChildNodes()) {
            skipLink.appendChild(link);
        }
    },

    _removeSkipLink(skipLink) {
        if (skipLink.hasChildNodes()) {
            skipLink.removeChild(skipLink.childNodes[0]);
        }
    },
};

export default HeaderVisibility;
