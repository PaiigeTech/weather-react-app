import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./Weather.css";

export default function Weather (){
    const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            city:response.data.name
        });
        setReady(true);
    }
    if(ready){
        return(
            <div className="weather">
                <form className="search-form">
                    <input type="text" placeholder="Enter a city.."/>
                    <button type="submit">Search</button>
                </form>
                <div className="weather-info">
                    <h1>{weatherData.city}</h1>
                    <h2> 17 MAY | 19:30 </h2>
                    <h3>{weatherData.description}</h3>
                </div>
                <div className="weather-details">
                    <div className="temperature">
                        <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />
          <span>{Math.round(weatherData.temperature)}°C</span>
                    </div>
                    <div className="conditions">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind:{weatherData.wind}km/h </li>
                        </ul>
                    </div>
                    </div>
            </div>
        );
    } else{
        const apiKey="64469ac67e6dc941feb5b50915a18dc7"
        let city="LONDON"
        let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return <p>"Loading results..." </p>
    }
}