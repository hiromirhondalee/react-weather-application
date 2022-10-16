import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          <WeatherIcon iconCode={props.data.icon} size={150}/>
        </li>
        <li className="main-temperature">
          <WeatherTemperature celsius={props.data.temperature} />
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
            <li>{props.data.humidity}%</li>
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
            <li>{Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
