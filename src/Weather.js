import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Mon, 10 Oct 2022, 14:56",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl:
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3155576/clouds-clipart-md.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form input-group mb-2">
          <input
            type="search"
            placeholder="Enter city name...."
            autoFocus="on"
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <div className="weather-display">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
            <li>
              <img
                src={weatherData.iconUrl}
                width="100px"
                alt="broken clouds"
              />
            </li>
            <li>
              <span className="main-temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </li>
          </ul>
          <hr />
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="label">
                  <span role="img" aria-label="humidity">
                    💦
                  </span>{" "}
                  Humidity:
                </li>
                <li>{weatherData.humidity}%</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="label">
                  <span role="img" aria-label="wind">
                    💨{" "}
                  </span>
                  Wind:
                </li>
                <li>{Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b1710895b469eb434ca65896f4e0d1be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
