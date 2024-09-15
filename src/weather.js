async function getWeather(city) {
    let data = await openweathermapApi(city);
    return data ;   
}

const buttonElement = document.querySelector('#searchButton');

// Добавляем обработчик события на кнопку
buttonElement.addEventListener('click', function() {
    let city = document.querySelector('#search').value;
    print(city);
});


async function print(city){
    let data = await getWeather(city);
    let tempCity = (data.list[0].main.temp - 273.15).toFixed(0);
    let windSpeed = data.list[0].wind.speed;
    let humidity = data.list[0].main.humidity;
    let pressure = (data.list[0].main.pressure * 0.987).toFixed(0);
    let condition;
    
    switch (data.list[0].weather[0].main) {
        case 'Clouds':
            // eslint-disable-next-line no-case-declarations, no-unused-vars
            condition = 'Облачно';
            break;
        default:
          // eslint-disable-next-line no-console
          console.log('Sorry');
      }

    
        const element = document.querySelector('#weather');

          element.innerText = 'Температура: ' + tempCity + '°C' + '\n' +
          'Ветер: ' + windSpeed + ' м/с' + '\n' +
          'Влажность: ' + humidity + '%' + '\n' +
          'Давление: ' + pressure + ' атм' + '\n' +  
          // eslint-disable-next-line no-undef
          condition;

}
    






