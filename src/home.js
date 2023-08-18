import homeImage from './images/MangoNirvanaHomeSmall.jpg';

function homePage () {
    const image = new Image();
    image.src = homeImage;
    image.alt = 'Mango Sticky Rice';

    return image;
}

export default homePage;