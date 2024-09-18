// Функция для вывода карты Москвы на страницу
function initMap(center, zoom) {
    // Создайте карту
    var map = new ymaps.Map("map", {
      center: center,
      zoom: zoom
    });
    window.map = map;
  
    // Укажите API-ключ
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ef55306e-5654-4b84-9508-09c0a4cc887c');
  }
  
// Функция для вызова initMap при загрузке страницы
function initYmaps(center, zoom) {
    ymaps.ready(function () {
      var mapInstance = initMap(center, zoom);
});
}


async function settingCoordinat() {
  var center = Object.values(await main());
  var zoom = 10; 
  initYmaps(center, zoom) 
}

settingCoordinat();