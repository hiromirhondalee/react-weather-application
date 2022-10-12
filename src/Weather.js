import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Tokyo</h1>
        <ul>
          <li>Mon, 10 Oct 2022, 14:56</li>
          <li>Broken Clouds</li>
          <li>
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3155576/clouds-clipart-md.png"
              width="100px"
              alt="broken clouds"
            />
          </li>
          <li>
            <span className="main-temperature">22</span>{" "}
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
              <li>88%</li>
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
              <li>8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
