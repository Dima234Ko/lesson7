/* eslint-disable no-console */
/* eslint-disable no-undef */
import { main } from "./location.js";
import { openweathergeoApi } from "./workAPI.js";
import { printWeather } from "./weather.js";

export function addButton(buttonName) {
  if (checkButtonExistence(buttonName)) {
    if (checkQuantityExistence()) {
      const buttonsDiv = document.querySelector("#buttons");
      const buttons = buttonsDiv.querySelectorAll("button");
      buttons[0].remove();
    }
    const button = document.createElement("button");
    button.textContent = buttonName;
    button.className = "button";
    const buttonsDiv = document.querySelector("#buttons");
    buttonsDiv.appendChild(button);
  }
}

export function checkButtonExistence(buttonName) {
  
    const buttonsDiv = document.querySelector("#buttons");
    if (buttonsDiv) {
      const buttons = buttonsDiv.querySelectorAll("button");
      for (const button of buttons) {
        if (button.textContent === buttonName) {
          return false;
        }
      }
    }
    return true;

}

export function checkQuantityExistence() {
  const buttonsDiv = document.querySelector("#buttons");
  if (buttonsDiv) {
    const buttons = buttonsDiv.querySelectorAll("button");
    if (buttons.length > 9) {
      return true;
    } else return false;
  }
}

export async function settingCoordinat() {
  var center = Object.values(await main());
  var zoom = 10;

  // Загружаем Yandex Maps API
  await loadYmaps();

  // Инициализируем карту
  ymaps.ready(() => {
    let map = new ymaps.Map("map", {
      center: center, // Используем координаты центра
      zoom: zoom, // Уровень масштабирования
    });
    window.map = map;
  });

  let city = "Москва";
  try {
    let cityName = await openweathergeoApi(center);
    city = cityName[0].name;
  } catch (err) {
    console.log(err);
  }

  await printWeather(city);
}

function loadYmaps() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Ошибка загрузки Yandex Maps API"));
    document.head.appendChild(script);
  });
}

export function uploadButtons() {
  let buttons = document.querySelectorAll("#buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      printWeather(button.textContent);
    });
  });
}

