import eleM from './element';
import sm from './scenemanager';

const queryWeather = (() => {
  const containerSearch = eleM('div', 'main', '', 'containerSearch')
  const searchBar = eleM('input', 'containerSearch', 'searchbar');
  const searchButton = eleM('button', 'containerSearch');
  containerSearch.setId('containerSearch');
  searchBar.setId('searchbar');
  const drawSearch = () => {
    sm.addElements([containerSearch, searchBar, searchButton])
    const elesearchBar = document.getElementById('searchbar');
    elesearchBar.placeholder = 'City, Country...';
    elesearchBar.type = 'text';
  }
  return {
    drawSearch
  };
})();

export {
  queryWeather as
  default
};