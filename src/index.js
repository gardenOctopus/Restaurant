import _ from 'lodash';

function header() {
    const element = document.createElement('header');

    const logo = document.createElement('a').innerHTML = 'Mango Nirvana';
  
    return element.appendChild(logo);
  }
  
  document.body.appendChild(header());