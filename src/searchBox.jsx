
// we have to import this two things for implimentting the styles from material ui  
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import "./SearchBox.css";
import { useEffect, useState } from "react";

//the setWeatherInfo function is here 👇 it collect the newInfo object as parameter and sets it
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "03198364dc7aca8868c6c77d25f4e0af";




  //this variable function fetch the api and assign the data from that api to the result object
  // and then return it to save it in getWeatherInfo variable
  //if their is any error then it catch it and throw it to console
  let getWeatherInfo = async () => {
    try {
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonRes = await res.json();
     // console.log(jsonRes)
     let result =  {
      city: city,
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
    return result;
    } catch (err) {
      throw err
    }
  };




  //this function is used set the city value 
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  //this funtion work as controlled component
  //this function gets the values of getWeatherInfo(the variable object) and put it in newInfo
  //this newInfo object now passsed to updateInfo function
  //and if any error occur than the value of error is set to true
  let handleSubmit = async (evt) => {
    try {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch (err) {
      setError(true)
    }
    
  };




  useEffect(() => {
     async function getfirstCity() {
      //we have to specify the default city here because it is an async function and 
      //if we dont define it then the getWeatherInfo() doesn't have the first city in query
      let res = await fetch(`${API_URL}?q=${city="surendranagar"}&appid=${'03198364dc7aca8868c6c77d25f4e0af'}&units=metric`);
      setCity("");
      //the other function from now is the same as the handleSubmit() without the catch block
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } getfirstCity()
  },[])
  

  
  
  
  return (
    <div className="SearchBox">
      {/* <h3>Search for the weather</h3> */}
      <form onSubmit={handleSubmit}>

        {/* //this TextField was from the materialui documentation  */}
        <TextField
          id="filled-basic"
          size="small"
          label="City Name"
          onChange={handleChange}
          required
          value={city}
          variant="filled"
        />
        &nbsp;&nbsp;&nbsp;

        {/* //this button element is copied from the materialui documentation
        //you can go through the documentation for different stylings */}
        <Button variant="contained" type="submit">
          Search
        </Button>

        {/* //if the value of error is true than the para will exicute */}
        {  error   &&   <p style={{ color: "red" }}>No Such Place Exists</p>  }
      </form>
    </div>
  );
}
