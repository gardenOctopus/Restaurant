import './style.css';

function aboutPage() {
    const aboutContent = document.createElement('div');

    const aboutHeader = createElement('h2');
    aboutHeader.textContent = 'About';
    aboutContent.appendChild(aboutHeader);

    const aboutParagraph = createElement('p');
    aboutParagraph.textContent = 'Topping cotton candy gummi bears cookie cookie sweet icing soufflé chupa chups. Candy canes chocolate bar cake tootsie roll cotton candy topping marzipan. Jelly beans bear claw jelly-o ice cream caramels jelly-o croissant. Cake sesame snaps chupa chups cookie pudding chupa chups topping chocolate cake shortbread.'
    aboutContent.appendChild(aboutParagraph);

    return aboutContent;
}

export default aboutPage;