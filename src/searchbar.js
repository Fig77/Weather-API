import eleM from './element';
import sm from './scenemanager';
const queryWeather = (() => {
  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';
  const containerSearch = eleM('div', 'main', '', 'containerSearch')
  const searchBar = eleM('input', 'containerSearch', 'searchbar');
  const searchButton = eleM('button', 'containerSearch');
  containerSearch.setId('containerSearch');
  searchBar.setId('searchbar');
  searchButton.setId('buttonsearch');

  const drawSearch = () => {
    sm.addElements([containerSearch, searchBar, searchButton])
    const elesearchBar = document.getElementById('searchbar');
    elesearchBar.placeholder = 'City, Country...';
    elesearchBar.type = 'text';
  }

  const querySearch = (city, country) => {
    fetch(`${http}${city},${country}${apiKey}`, {mode: 'cors'})
      .then(function (response) {
        console.log(response.json());
      })
      .catch(function (err) {
        console.log('ERROR ERROR DELETING HARD DRIVE');
      });
  };

  const buttonInit = () => {
    const buttonSearch = document.getElementById('buttonsearch');
    buttonSearch.addEventListener('click', querySearch('Santa Fe', 'Argentina'));
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