const currentApiBaseUrl = 'https://api.weatherapi.com/v1/current.json';
const forecastApiBaseUrl = 'https://api.weatherapi.com/v1/forecast.json';
const apiKey = '8120596cefc941678a355320230604';

let temperatureUnit = "C";
let windUnit = "kph";
let city, country, localtime, windSpeed, humidity, temperature, weatherDescription, iconUrl, forecastData;

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const weatherInfo = document.querySelector('.weather-info');
const forecastInfo = document.querySelector(`.forecast-info`)