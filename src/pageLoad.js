import header from './nav-menu';
import './style.css';

function pageLoad() {
    const body = document.querySelector('body');
    body.classList.add('body');
    const content = document.querySelector('#content');
    content.appendChild(header());
}

export default pageLoad;