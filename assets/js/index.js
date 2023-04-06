const currentApiBaseUrl = 'https://api.weatherapi.com/v1/current.json';
const forecastApiBaseUrl = 'https://api.weatherapi.com/v1/forecast.json';
const apiKey = '8120596cefc941678a355320230604';

let temperatureUnit = "C";
let windUnit = "kph";
let city, country, localtime, windSpeed, humidity, temperature, weatherDescription, iconUrl, forecastData;

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const weatherInfo = document.querySelector('.weather-info');
const forecastInfo = document.querySelector(`.forecast-info`);

document.addEventListener('DOMContentLoaded', function() {
  searchBtn.addEventListener('click', searchWeather);

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchWeather(event);
    }
  });
});

function searchWeather(event) {
  event.preventDefault();
  city = searchInput.value.trim();
  if (!city) return;

  // Show the loading bar
  const loading = document.querySelector('#loading');
  loading.style.display = 'block';

  fetch(`${currentApiBaseUrl}?key=${apiKey}&q=${city}`)
    .then(response => response.json())
    .then(data => {
      // Hide the loading bar
      loading.style.display = 'none';
      if (data.error) {
        weatherInfo.innerHTML = `<p>${data.error.message}</p>`;
      } else {
        locationData = data.location;
        country = locationData.country;
        localtime = locationData.localtime;
        windSpeed = data.current.wind_kph;
        humidity = data.current.humidity;
        temperature = data.current.temp_c;
        weatherDescription = data.current.condition.text;
        iconUrl = `https:${data.current.condition.icon}`;

        fetch(`${forecastApiBaseUrl}?key=${apiKey}&q=${city}&days=5`)
          .then(response => response.json())
          .then(data => {
            if(data.error){
              weatherInfo.innerHTML = `<p>${data.error.message}</p>`;
            } else {
              forecastData = data.forecast.forecastday;
              displayWeather();
            }
          });
      }
    })
    .catch(error => {
      // Hide the loading bar
      loading.style.display = 'none';
      weatherInfo.innerHTML = `<p>Sorry, something went wrong.</p>`;
      console.error(error);
    });
}

function displayWeather() {
  weatherInfo.innerHTML = `
    <h2>City: ${city.toUpperCase()}</h2>
    <p>Country: ${country}</p>
    <p>${localtime}</p>
    <img src="${iconUrl}" alt="${weatherDescription}">
    <p>Condition: ${weatherDescription}</p>
    <p>Temperature: ${temperature}°${temperatureUnit}</p>
    <button id="toggle-temp" onclick="toggleTemperatureUnit()">Toggle</button>
    <p>Windspeed: ${windSpeed} ${windUnit}</p>
    <button id="toggle-wind" onclick="toggleWindUnit()">Toggle</button>
    <p>Humidity: ${humidity}</p>
  `;


