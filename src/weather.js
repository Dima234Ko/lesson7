import { openweathermapApi } from "./workAPI.js";
import { uploadButtons } from "./buildingPage.js";
import { addButton } from "./buildingPage.js";

async function getWeather(city) {
  let data = await openweathermapApi(city);
  return data;
}

const buttonElement = document.querySelector("#searchButton");

// Добавляем обработчик события на кнопку
if (buttonElement !== null) {
  buttonElement.addEventListener("click", async function () {
    let city = document.querySelector("#search").value;
    try {
    await printWeather(city);
    addButton(city);
  } catch {
      alert("Населенный пункт не найден");
    }
  });
}

export async function printWeather(city) {
  
    let data = await getWeather(city);
    let tempCity = (data.list[0].main.temp - 273.15).toFixed(0);
    let windSpeed = data.list[0].wind.speed;
    let humidity = data.list[0].main.humidity;
    let pressure = (data.list[0].main.pressure * 0.987).toFixed(0);
    let condition;

    switch (data.list[0].weather[0].main) {
      case "Clouds":
        condition = "Облачно";
        break;
      case "Clear":
        condition = "Облачно";
        break;
      case "Rain":
        condition = "Дождь";
        break;
      case "Snow":
        condition = "Снег";
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("Sorry");
    }

    const element = document.querySelector("#weather");

    element.innerText =
      "Температура: " +
      tempCity +
      "°C" +
      "\n" +
      "Ветер: " +
      windSpeed +
      " м/с" +
      "\n" +
      "Влажность: " +
      humidity +
      "%" +
      "\n" +
      "Давление: " +
      pressure +
      " атм" +
      "\n" +
      condition;

    var center = Object.values(data.list[0].coord);

    window.map.setCenter(center);

    uploadButtons();
}
