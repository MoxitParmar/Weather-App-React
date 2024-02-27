//First of all install the materialui npm package goto the material ui webpage and install the required dependencies

import InfoBox from "./infoBox";
import { useState , useEffect} from "react";

import SearchBox from "./searchBox";


export default function WeatherApp() {
  //define a state variable with the inital object data
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelsLike: 24,
    humidity: 70,
    temp: 26,
    tempMax: 30,
    tempMin: 21,
    weather: "haze",
  });
  
  //this function is passed as a prop to SearchBox component
    let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
        {/* //here we pass the funciton to the Searchbox */}
          <SearchBox updateInfo={updateInfo} />
      <br />
      <br />
      {/* //here we pass the object info to the infobox */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}
