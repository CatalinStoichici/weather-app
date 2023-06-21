const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

const gradeCelsius=(kelvin)=>{
    celcius=Math.round(kelvin-273.15);
    return celcius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) { return true }
    else { return false }
}

updateWeatherInfo = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc=`http://openweathermap.org/img/wn/${imageName}@2x.png`
    
    //cityName.textContent = city.name
    cityName.textContent = city.name;

    cardBody.innerHTML = `
    <div class="card-mid row">
          <div class="col-8 text-center temp">
            <span>${gradeCelsius(city.main.temp)}&deg;C</span>
          </div>
          <div class="col-4 condition-temp">
            <p class="condition">${city.weather[0].description}</p>
            <p class="high">${gradeCelsius(city.main.temp_max)}&deg;C</p>
            <p class="low">${gradeCelsius(city.main.temp_min)}&deg;C</p>
          </div>
        </div>

        <div class="icon-container card shadow mx-auto">
          <img src="${iconSrc}" alt="">
        </div>
        <div class="card-bottom px-5 py-4 row">
          <div class="col text-center">
            <p>${gradeCelsius(city.main.feels_like)}&deg;C</p>
            <span>Se simte ca</span>
          </div>
          <div class="col text-center">
            <p>${city.main.humidity}</p>
            <span>Umiditate</span>
          </div>
        </div>`;
        if (isDayTime(imageName)) {
            console.log('day');
            timeImage.setAttribute('src', './assets/img/day_image.svg');
            if (cityName.classList.contains('text-white')) {
                cityName.classList.remove('text-white');
            } else {
                cityName.classList.add('text-black');
            }
    
        } else {
            console.log('night');
            timeImage.setAttribute('src', './assets/img/night_image.svg');
            if (cityName.classList.contains('text-black')) {
                cityName.classList.remove('text-black');
            } else {
                cityName.classList.add('text-white');
            }
        }

        cardInfo.classList.remove('d-none');
}







searchForm.addEventListener('submit', event =>{
    event.preventDefault();
    const searchCity = cityValue.value.trim();
    console.log(searchCity);
    searchForm.reset();

    requestCity(searchCity)
    .then((data) => { 
        updateWeatherInfo(data);
    })
    .catch((error) => { 
        console.log(error)
    })
})