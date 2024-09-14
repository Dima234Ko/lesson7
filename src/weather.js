async function getWeather(city) {
   
    /*eslint-disable-next-line no-undef*/
    let data = await openweathermapApi(city);
    let tempCity = data.list[0].main.temp;
    /*eslint-enable-next-line*/

return tempCity - 273.15;
    
}


// eslint-disable-next-line no-unused-vars
const buttonElement = document.querySelector('#searchButton');

// Добавляем обработчик события на кнопку
buttonElement.addEventListener('click', function() {
    let city = document.querySelector('#search').value;
    // eslint-disable-next-line no-unused-vars
    print(city);
});


async function print(city){
    // eslint-disable-next-line no-console
    console.log(await getWeather(city));
    
        const element = document.querySelector('#weather');

          element.innerText = await getWeather(city);

}
    






