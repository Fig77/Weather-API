import eleM from './element';
import sm from './scenemanager';
const queryWeather = (() => {
  //httplink
  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';
  let weather = '10d';
  const defaultUnit = 'metric';
  //searchbar elements
  const containerSearch = eleM('div', 'main', 'd-flex flex-grow-0', 'containerSearch');
  const searchBar = eleM('input', 'containerSearch', 'searchbar');
  const searchButton = eleM('button', 'containerSearch', 'd-flex flex-grow-0 flex-column align-i-center justify-c-center');
  const lupa = eleM('i', 'buttonsearch', 'fa fa-search');
  containerSearch.setId('containerSearch');
  searchBar.setId('searchbar');
  searchButton.setId('buttonsearch');
  //result display element
  const resultContainer = eleM('div', 'main', 'd-flex flex-column results-cont', 'rcont');
  const divHeader = eleM('div', 'rcont', 'd-flex flex-grow-0 justify-c-between', 'd-header');
  const location = eleM('h1', 'd-header', 'h1-title', 'header-1');
  const infoUl = eleM('ul', 'rcont', '', 'ul-info');
  const mainTemp = ['Temperature: ', 'Feel: ', 'Min: ', 'Max: ', 'Pressure: ', 'Humidity: '];
  const liData = eleM('li', 'ul-info', 'li-data d-flex justify-c-between', 'li-data', 6, mainTemp);
  const imgLink = eleM('img', 'd-header', 'img-style');

  const drawSearch = () => {
    sm.addElements([containerSearch, searchBar, searchButton, lupa])
    const elesearchBar = document.getElementById('searchbar');
    elesearchBar.placeholder = 'City, Country...';
    elesearchBar.type = 'text';
  };

  const softClear = () => {
    // clean data here.
  };

  const drawResult = (data) => {
    sm.addElements([resultContainer, divHeader, location, infoUl, liData, imgLink]);
    location.getPlaced().innerHTML = `${data.name}`;
    const mainArray = liData.getPlaced();
    let i = 0;
    for (var key in data.main) {
      sm.addSingle(eleM('span', mainArray[i].id, 'li-span', `span-${i}`, 0,`${data.main[key]}`));
      i += 1;
    }
  };

  const querySearch = (city, country) => {
    fetch(`${http}${city},${country}${apiKey}&units=${defaultUnit}`, {
        mode: 'cors'
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const items = data;
        drawResult(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const buttonInit = () => {
    const buttonSearch = document.getElementById('buttonsearch');
    buttonSearch.addEventListener('click', function () {
      let value = searchBar.getPlaced().value.trim().split(',');
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
  default
};