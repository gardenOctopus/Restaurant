import './style.css';

function about() {
    //Creates about Object
    const about = document.createElement('div');

    //Creates Logo & Adds to about 
    const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'About';
    about.appendChild(pageTitle);

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    about.appendChild(p);

    return about;
}

export default about;



