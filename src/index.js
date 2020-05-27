import './css/main.css';
import h from './header';
import search from './query.js';

const init = () => {
  h.createHeader();
  search.initSearchBar();
};


window.onload = init();