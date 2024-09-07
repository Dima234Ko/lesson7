ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [55.751244, 37.618423],
    zoom: 10,
  });

  var placemark = new ymaps.Placemark([55.751244, 37.618423], {
    hintContent: "Москва",
    balloonContent: "Столица России",
  });

  map.geoObjects.add(placemark);
}
