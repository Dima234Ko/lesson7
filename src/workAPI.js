const URL = "https://api.openweathermap.org/data/2.5/weather?";
let keyAPI = "439d4b804bc8187953eb36d2a8c26a02&_=1726339180386";


/**
 * Возвращает результат API запроса в формате JSON
 *
 * @param {string} q - Город
 */

async function requestGeocodingAPI(q) {
  let response = await fetch(
      URL + 'q=' + q + '&limit=1&appid=' + keyAPI,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    let responseJson = await response.json();
    return responseJson.coord;
}



async function openweathermapApi(city) {
  let coordinates = await requestGeocodingAPI(city);
  
  let response = await fetch(
      URL + 'lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&appid=' + keyAPI,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    let responseJson = await response.json();
    return responseJson;
}

/*
eslint-disable-next-line no-undef
*/
window.openweathermapApi = openweathermapApi;
/*
eslint-enable-next-line
*/