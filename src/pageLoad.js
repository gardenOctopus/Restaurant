import header from './nav-menu';
import './style.css';
import homePage from './home';

function pageLoad() {
    const body = document.querySelector('body');
    body.classList.add('body');
    const content = document.querySelector('#content');
    content.appendChild(header());
    content.appendChild(homePage());
}

export default pageLoad;