import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "b1710895b469eb434ca65896f4e0d1be";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col>">
          <span className="WeatherForecast-day">Sun</span>
          <div className="WeatherForecast-icon">
            <WeatherIcon iconCode="02d" size={50} />
          </div>
          <div className="units">
            <span className="WeatherForecast-max-temp">20°</span>
            <span className="WeatherForecast-min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
