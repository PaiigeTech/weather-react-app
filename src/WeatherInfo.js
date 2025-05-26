import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
 
export default function WeatherInfo(props){
    return(
<div className="weather">
 <div className="weather-info">
    <h1>{props.data.city}</h1>
    <h2> <FormattedDate date={new Date()} /> </h2>
     <h3>{props.data.description}</h3>
      </div>
     <div className="weather-details">
      <div className="temperature">
    <WeatherIcon code={props.data.icon} size={52} />
<span>{Math.round(props.data.temperature)}°C</span>
 </div>
  <div className="conditions">
 <ul>
  <li>Humidity: {props.data.humidity}%</li>
 <li>Wind:{props.data.wind}km/h </li>
 </ul>
</div>
 </div>
 </div>
    );
}