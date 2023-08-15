//Grabs ID of Index Container
const content = document.getElementById('content');

//Creates Header Object
const header = document.createElement('header');

//Creates Logo & Adds to Header 
const logo = document.createElement('h1');
logo.textContent = 'Mango Nirvana';
header.appendChild(logo);

const links = ['About', 'Menu', 'Contact'];
links.forEach(createHeaderLink);
function createHeaderLink(link) {
    let x = document.createElement('a');
    x.textContent = link;
    header.appendChild(x);
}

content.appendChild(header);