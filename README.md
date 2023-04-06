<div align="center">
# Climacast
</div>

## Requirements
  <ul>
    <li>A web browser</li>
    <li>Weather api</li>
    <li>Git</li>
  </ul>

## Installation
  <ol>
    <li>Clone the repository to your local machine using the following command:</li>
    <code>git clone git@github.com:KevinBett458/Climacast.git</code>
    <li>Navigate to the project directory using the following command:</li>
    <code>cd climacast</code>
    <li>Open your web browser and navigate to http://127.0.0.1:5500/index.html to view the application.</li>
  </ol>

## Features
<p>The system has the following features:</p>
<ul>
  <li>A search bar where the user can enter a city</li>
  <li>Displays the local time and country of the location entered. It also displays current weather information for the entered location, such as temperature, weather description, wind speed and humidity.</li>
  <li>Display an icon or image representing the current weather conditions.</li>
  <li>Handles errors gracefully if the location entered is not found or if there is an issue with the API request</li>
</ul>

## Code Overview
<p>The system is built using html, css and JavaScript and interacts with the weather API to retrieve weather data. Here is an overview:</p>
<ul>
  <li>index.html: The main HTML file that displays the outline of my webpage.</li>
  <li>style.css: The main CSS file that styles the HTML elements.</li>
  <li>script.js: The main JavaScript file that interacts with the weather API to display weather data and the forecast.</li>
  <li>Weather API: This is a service that provides developers with access to real-time or historical weather data for a specific location or region</li>
</ul>
<p>The script.js file contains the following functions:</p>
<ul>
  <li>searchWeather(event): - This function is responsible for fetching the weather data from the Weather API based on the city entered by the user. It also fetches the forecast data for the next 5 days for the same city. Once the data is fetched, it calls the displayWeather() function to display the weather information and forecast.</li>

  <li>displayWeather(): - This function is responsible for displaying the weather information and the forecast data for the city entered by the user.</li>

  <li>toggleTemperatureUnit(): This function is responsible for toggling the temperature unit between Celsius and Fahrenheit.</li> 

  <li>toggleWindUnit() - This function is responsible for toggling the wind speed unit between kilometers per hour (kph) and miles per hour (mph).</li>
</ul>

## Conclusion
<p>The web app is a simple weather app that allows users to search for the current weather and 5-day forecast of any city in the world. It uses the Weather API to fetch the weather data and displays it in an easy-to-read format. With some additional features and improvements, it could be turned into a fully-functional weather application. Overall, the app is a useful tool for checking the weather and planning for the week ahead.. </p>

## Author
<p>Kevin Bett.</p>

## License
<p>MIT LICENSE *Copyright (c) {2023} KEVIN BETT</p>