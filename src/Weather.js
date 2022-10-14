import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl:
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3155576/clouds-clipart-md.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiKey = "b1710895b469eb434ca65896f4e0d1be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form input-group mb-2" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city name...."
            autoFocus="on"
            className="form-control"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <div className="weather-display">
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
