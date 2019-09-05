import * as ELEMENTS from './elements';

ELEMENTS.ELEMENT_SEARCHED_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.nodeValue;
    alert('Clicked');
}