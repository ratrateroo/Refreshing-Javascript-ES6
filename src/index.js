import _ from 'lodash';
import './style.css';
import Icon from './weathericon.png';
import printMe from './print.js';
// import * as ELEMENTS from './elements';

function component() {



  // ELEMENTS.ELEMENT_HEADER.addEventListener('click', showbackground);

  // function showbackground() {

  //   ELEMENTS.ELEMENT_HEADER.style.backgroundColor = "green";
  //   console.log(Icon);
  // }


  // ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

  // function searchWeather() {
  //   const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.nodeValue;
  //   alert('Clicked');
  // }
  const element = document.createElement('div');
  const btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;


  return element;
}

document.body.appendChild(component());