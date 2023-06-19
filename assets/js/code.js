const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-mane p');
const cardBody = document.querySelector('.card-body');

const gradeCelsius=(kelvin)=>{
    celcius=Math.round(kelvin-273.15);
    return celcius;
}

updateWeatherInfo = (City) => {
    console.log(City);
    const imageName = City.weather[0].icon;
    const iconSrc=`http://openweathermap.org/img/wn/${imageName}.png`
    cityName.textContent = City.name;
    cardBody.innerHTML = `
    <div class="card-mid row">
          <div class="col-8 text-center temp">
            <span>${gradeCelsius(City.main.temp)}&deg;C</span>
          </div>
          <div class="col-4 condition-temp">
            <p class="condition">${City.weather[0].description}</p>
            <p class="high">${gradeCelsius(City.main.temp_max)}&deg;C</p>
            <p class="low">${gradeCelsius(City.main.temp_min)}&deg;C</p>
          </div>
        </div>

        <div class="icon-container card shadow mx-auto">
          <img src="${iconSrc}" alt="">
        </div>
        <div class="card-bottom px-5 py-4 row">
          <div class="col text-center">
            <p>${gradeCelsius(City.main.feels_like)}&deg;C</p>
            <span>Se simte ca</span>
          </div>
          <div class="col text-center">
            <p>${City.main.humidity}</p>
            <span>Umiditate</span>
          </div>
        </div>`
}





searchForm.addEventListener('submit', event =>{
    event.preventDefault();
    const searchCity = cityValue.value.trim();
    console.log(searchCity);
    searchForm.reset();

    requestCity(searchCity)
    .then((dataup) => { 
        updateWeatherInfo(dataup);
    })
    .catch((error) => { console.log(error);})
})