import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {

  
  function maxTemperature() {
    let temperature = Math.round(props.forecastDay.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastDay.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastDay.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <span className="WeatherForecast-day">{day()}</span>
      <div className="WeatherForecast-icon">
        <WeatherIcon
          iconCode={props.forecastDay.weather[0].icon}
          size={50}
        />
      </div>
      <div className="units">
        <span className="WeatherForecast-max-temp">{maxTemperature()}</span>
        <span className="WeatherForecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
