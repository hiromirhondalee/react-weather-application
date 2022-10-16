import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
