import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://cheerful-faun-c6f164.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hiromi Tanimura{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/hiromirhondalee/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
