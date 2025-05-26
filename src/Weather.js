import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./Weather.css";
import FormattedDate from "./FormattedDate"
import WeatherInfo from "./WeatherInfo";

export default function Weather (props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            icon: response.data.weather[0].icon,
            city:response.data.name
        });
    
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
    function search (){
        const apiKey="64469ac67e6dc941feb5b50915a18dc7"
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if(weatherData.ready){
        return(
            <div className="weather p-4">
            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center gap-2 mb-4">
                                <input type="text" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                                <button type="submit" className="btn btn-primary shadow-sm"> Search</button>
                            </form>
                            <WeatherInfo data={weatherData} />
                            </div>
                
        
        );
    } else{
       search(city);
        return <p>"Loading results..." </p>
    }
}