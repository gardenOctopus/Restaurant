import header from './nav-menu';

function pageLoad() {
    const content = document.querySelector('#content');
    content.appendChild(header());
}

export default pageLoad;