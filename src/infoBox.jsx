//here are the all imports from the material ui documentation and css file for the alignment
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1635793902077-97d544d5c6b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="Infobox">
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              //the conditons for deciding the url
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="the weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature = {info.temp} &deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>MaxTemp = {info.tempMax} &deg;C</div>
              <div>MinTemp = {info.tempMin} &deg;C</div>
              <div>
                At this time weather can be described as &nbsp;
                <b>
                  <i>{info.weather}</i>
                </b> &nbsp;
                and it will feelsLike &nbsp;
                <b>
                  <i>{info.feelsLike}</i>
                </b>
                &deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
