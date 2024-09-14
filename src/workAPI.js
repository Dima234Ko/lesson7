const URL = "https://openweathermap.org/data/2.5/find?";
let keyAPI = "439d4b804bc8187953eb36d2a8c26a02&_=1726339180386";


/**
 * Возвращает результат API запроса в формате JSON
 *
 * @param {string} q - Город
 */

async function openweathermapApi(city) {
    let response = await fetch(
      URL + 'q=' + city + '&limit=1&appid=' + '&appid=' + keyAPI,
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

/*eslint-disable-next-line no-undef*/
window.openweathermapApi = openweathermapApi;
/*eslint-enable-next-line*/