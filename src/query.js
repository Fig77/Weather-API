/* eslint-disable no-restricted-syntax, guard-for-in */
import eleM from './element';
import sm from './scenemanager';
import {
  lazy,
} from './svg';

const queryWeather = (() => {
  // httplink
  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';
  let defaultUnit = 'fahrenheit';
  // searchbar elements
  const containerSearch = eleM('div', 'main', 'd-flex flex-grow-0', 'containerSearch');
  const searchBar = eleM('input', 'containerSearch', 'searchbar');
  const searchButton = eleM('button', 'containerSearch', 'd-flex flex-grow-0 flex-column align-i-center justify-c-center');
  const lupa = eleM('i', 'buttonsearch', 'fa fa-search');
  containerSearch.setId('containerSearch');
  searchBar.setId('searchbar');
  searchButton.setId('buttonsearch');
  // result display element
  const resultContainer = eleM('div', 'main', 'd-flex flex-column results-cont', 'rcont');
  const divHeader = eleM('div', 'rcont', 'd-flex flex-grow-0 justify-c-between', 'd-header');
  const location = eleM('h1', 'd-header', 'h1-title', 'header-1', 0, '');
  const infoUl = eleM('ul', 'rcont', '', 'ul-info');
  const mainTemp = ['Temperature: ', 'Feel: ', 'Min: ', 'Max: ', 'Pressure: ', 'Humidity: '];
  const liData = eleM('li', 'ul-info', 'li-data d-flex justify-c-between', 'li-data', 6, mainTemp);
  const imgLink = eleM('img', 'd-header', 'img-style', 'img-weather');
  // Switch button
  const divSwitch = eleM('div', 'main', 'onoffswitch', 'd-switch');

  const drawSearch = () => {
    sm.addElements([containerSearch, searchBar, searchButton, lupa]);
    const elesearchBar = document.getElementById('searchbar');
    elesearchBar.placeholder = 'Enter: City, Country';
    elesearchBar.type = 'text';
    sm.addElements([resultContainer, divHeader, location, infoUl, liData, imgLink]);
    sm.addSingle(divSwitch);
    searchBar.getPlaced().autocomplete = 'off';
    divSwitch.getPlaced().insertAdjacentHTML('afterBegin', lazy);
  };

  const drawResult = (data) => {
    location.getPlaced().innerHTML = `${data.name}`;
    const mainArray = liData.getPlaced();
    let i = 0;
    for (const key in data.main) {
      if (!document.getElementById(`span-${i}`)) {
        sm.addSingle(eleM('span', mainArray[i].id, 'li-span', `span-${i}`, 0, `${data.main[key]}`));
      } else {
        document.getElementById(`span-${i}`).innerHTML = `${data.main[key]}`;
      }
      imgLink.getPlaced().src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      if (i < 4) {
        document.getElementById(`span-${i}`).innerHTML += '&nbsp;°';
      }
      i += 1;
    }
  };

  const querySearch = (city, country) => {
    if ((city !== undefined && country !== undefined)) {
      fetch(`${http}${city},${country}${apiKey}&units=${defaultUnit}`, {
        mode: 'cors',
      })
        .then((response) => response.json())
        .then((data) => {
          drawResult(data);
        })
        .catch(() => {
        });
    }
  };

  const buttonInit = () => {
    const buttonSearch = document.getElementById('buttonsearch');
    let value = '';
    buttonSearch.addEventListener('click', () => {
      value = searchBar.getPlaced().value.trim().split(',');
      querySearch(value[0], value[1]);
    });
    searchBar.getPlaced().addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        value = searchBar.getPlaced().value.trim().split(',');
        querySearch(value[0], value[1]);
      }
    });
    document.querySelector('.onoffswitch-label').addEventListener('click', () => {
      if (defaultUnit === 'metric') {
        defaultUnit = 'fahrenheit';
      } else {
        defaultUnit = 'metric';
      }
      querySearch(value[0], value[1]);
    });
  };

  const initSearchBar = () => {
    drawSearch();
    buttonInit();
  };

  return {
    initSearchBar,
  };
})();

export {
  queryWeather as
  default,
};