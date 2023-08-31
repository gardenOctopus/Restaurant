import './style.css';

function contact() {
    //Creates contact Object
    const contact = document.createElement('div');

    //Creates Logo & Adds to contact 
    const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'Contact';
    contact.appendChild(pageTitle);

    //Contact Info
    const location = document.createElement('h3');
    location.textContent = 'Location';
    contact.appendChild(location);

    const locationInfo = document.createElement('p');
    locationInfo.innerHTML = '123 Mango Street, <br> Pineapple, ON';
    contact.appendChild(locationInfo);

    const hours = document.createElement('h3');
    hours.textContent = 'Hours';
    contact.appendChild(hours);

    const hoursInfo = document.createElement('p');
    hoursInfo.innerHTML = 'Monday - Friday &nbsp; 12pm - 9pm <br> Saturday - Sunday &nbsp; 9am - 9pm';
    contact.appendChild(hoursInfo);

    const phone = document.createElement('h3');
    phone.textContent = 'Phone';
    contact.appendChild(phone);

    const phoneInfo = document.createElement('p');
    phoneInfo.textContent = '123-4567';
    contact.appendChild(phoneInfo);

    const email = document.createElement('h3');
    email.textContent = 'Email';
    contact.appendChild(email);

    const emailInfo = document.createElement('p');
    emailInfo.textContent = 'mango@pineapple.com';
    contact.appendChild(emailInfo);

    return content.appendChild(contact);
}

export default contact;

