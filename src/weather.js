async function getWeather(city) {
   
    /*eslint-disable-next-line no-undef*/
    let data = await openweathermapApi(city);
    let tempCity = data.main.temp;
    /*eslint-enable-next-line*/

return tempCity - 273.15;
    
}


// eslint-disable-next-line no-unused-vars
const buttonElement = document.querySelector('#searchButton');

// Добавляем обработчик события на кнопку
buttonElement.addEventListener('click', function() {
    let city = document.querySelector('#search').value;
    // eslint-disable-next-line no-unused-vars
    let translateCity = translateCityName(city, apiKey);
    print(translateCity);
});


async function print(city){
    // eslint-disable-next-line no-console
    console.log(await getWeather(city));
    
}


// eslint-disable-next-line no-unused-vars
let apiKey = '53053fd8-cdad-4bd7-ac64-5729c3a42021';


