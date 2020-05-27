const queryWeather = (function factory() {
  const http = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&appid=8a337fa287e25404c5043b8a8eb17d4a';
  let defaultUnit = 'imperial';

  const querySearch = async (city, country) => {
    let response = '';
    if ((city !== undefined || country !== undefined)) {
      const raw = await fetch(`${http}${city},${country}${apiKey}&units=${defaultUnit}`, {
        mode: 'cors',
      })
      const response = await raw.json();
      return response;
    }
  }

  const toggleUnit = () => {
    if (defaultUnit === 'metric') {
      defaultUnit = 'imperial';
    } else {
      defaultUnit = 'metric';
    }
  };

  const getResponse = (city, country) => {
    return querySearch(city, country).resolve();
  };

  return {
    querySearch,
    toggleUnit,
  };
})();

export {
  queryWeather as
  default,
};