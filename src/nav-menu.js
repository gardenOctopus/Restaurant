import './style.css';

function header() {
    //Creates Header Object
    const header = document.createElement('header');
    header.classList.add('header');

    //Creates Logo & Adds to Header 
    const logo = document.createElement('h1');
    logo.textContent = 'Mango Nirvana';
    header.appendChild(logo);

    //Creates Links
    const linkContainer = document.createElement('div');
    header.appendChild(linkContainer);

    const links = ['About', 'Menu', 'Contact'];
    links.forEach(createHeaderLink);
    function createHeaderLink(link) {
        let x = document.createElement('a');
        x.classList.add('headerLink');
        x.textContent = link;
        linkContainer.appendChild(x);
    }

    return header;
}

export default header; 

