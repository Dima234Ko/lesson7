/* eslint-disable no-unused-vars */
/**
 * Возвращает результат API запроса в формате JSON
 *
 * @param {string} q - Город
 */

async function openweathermapApi(city) {
  const url = "https://openweathermap.org/data/2.5/find?";
  const keyAPI = "439d4b804bc8187953eb36d2a8c26a02&_=1726339180386";
    let response = await fetch(
      url + 'q=' + city + '&limit=1&appid=' + '&appid=' + keyAPI,
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


window.openweathermapApi = openweathermapApi;


async function openweathergeoApi(coords) {
  const url = 'https://api.openweathermap.org/geo/1.0/reverse?';
  const keyAPI = "813c35b4fc3ef7e0c16420d3e7bfdce6";
    let response = await fetch(
      url + 'lat=' + coords[0] + '&lon=' + coords[1] + `&limit=1&appid=${keyAPI}`,
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

window.openweathergeoApi = openweathergeoApi;