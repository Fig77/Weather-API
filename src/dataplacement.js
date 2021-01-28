/* eslint-disable no-restricted-syntax, guard-for-in */
import qr from './query';

const htmlManipulation = (() => {
  const buttonSearch = document.getElementById('buttonsearch');
  const searchBar = document.getElementById('searchbar');
  const location = document.getElementById('header-1');
  const imgLink = document.getElementById('image-weather'); // image
  let value = '';

  const drawResult = (data) => {
    location.innerHTML = `${data.name}`;
    let i = 0;
    for (const key in data.main) {
      document.getElementById(`span-${i}`).innerHTML = `${data.main[key]}`;
      imgLink.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      if (i < 4) {
        document.getElementById(`span-${i}`).innerHTML += '&nbsp;°';
      }
      i += 1;
      if (i === 6) {
        break;
      }
    }
  };

  function getData() {
    value = searchBar.value.trim().split(',');
    qr.querySearch(value[0], value[1]).then((response) => {
      console.log(response);
      console.log('asdasd');
      if (response.cod === 200) {
        drawResult(response);
      } else {
        location.innerHTML = response.message;
      }
    });
  }

  const buttonInit = () => {
    buttonSearch.addEventListener('click', () => {
      getData();
    });
    document.getElementById('switch').addEventListener('click', () => {
      qr.toggleUnit();
      qr.querySearch(value[0], value[1]).then((response) => {
        if (response) {
          drawResult(response);
        }
      });
    });
  };

  const searchbarInit = () => {
    searchBar.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        getData();
      }
    });
  };

  const init = () => {
    buttonInit();
    searchbarInit();
  };

  return {
    init,
  };
})();

export {
  htmlManipulation as
  default,
};
