 
 
import { openweathermapApi } from "./workAPI.js";
import { uploadButtons } from "./buildingPage.js";
import { addButton } from "./buildingPage.js";

export async function getWeather(city) {
  let data = await openweathermapApi(city);
  return data;
}

const buttonElement = document.querySelector("#searchButton");
if (buttonElement !== null) {
  buttonElement.addEventListener("click", async function () {
    let city = document.querySelector("#search").value;
    let dataWeather = await getData(city);
    if (!(dataWeather === undefined)) {
      await printWeather(dataWeather);
      await setCenterMap(dataWeather);
      addButton(city);
    }
  });
}

export async function setCenterMap(dataWeather) {
  var center = Object.values(dataWeather.coord);
  window.map.setCenter(center);
}

export async function getData(city) {
  if (city.length == 0) {
    alert("Введите населенный пункт");
  } else
    try {
      let data = await getWeather(city);
      return {
        tempCity: getTempCity(data),
        windSpeed: getWindSpeed(data),
        humidity: getHumidity(data),
        pressure: getPressure(data),
        condition: getCondition(data),
        coord: getCoord(data),
      };
    } catch {
      alert("Населенный пункт не найден");
    }
}

export async function printWeather(dataWeather) {
  const element = document.querySelector("#weather");

  element.innerText =
    "Температура: " +
    dataWeather.tempCity +
    "°C" +
    "\n" +
    "Ветер: " +
    dataWeather.windSpeed +
    " м/с" +
    "\n" +
    "Влажность: " +
    dataWeather.humidity +
    "%" +
    "\n" +
    "Давление: " +
    dataWeather.pressure +
    " атм" +
    "\n" +
    dataWeather.condition;

  uploadButtons();
}

export function getCondition(data) {
  switch (data.list[0].weather[0].main) {
    case "Clouds":
      return "Облачно";
    case "Clear":
      return "Ясно";
    case "Rain":
      return "Дождь";
    case "Snow":
      return "Снег";
    default:
      // eslint-disable-next-line no-console
      console.log("Undefined");
  }
}

export function getTempCity(data) {
  return (data.list[0].main.temp - 273.15).toFixed(0);
}

export function getWindSpeed(data) {
  return data.list[0].wind.speed;
}

export function getHumidity(data) {
  return data.list[0].main.humidity;
}

export function getPressure(data) {
  return (data.list[0].main.pressure * 0.987).toFixed(0);
}

export function getCoord(data) {
  return data.list[0].coord;
}
