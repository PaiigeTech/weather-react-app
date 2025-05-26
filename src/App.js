import Weather from "./Weather";
import './App.css';

export default function App() {
  return(
    <div className="react-app"> 
    <h1>Weather App</h1>
    <Weather  defaultCity ="LONDON"/>
    <footer>
      <p>This project was coded by Phindile Petunia {" "} and is {" "}
     <a href="https://github.com/PaiigeTech/weather-react-app.git" target="_blank">open sourced on Github</a> {" "}
     and {" "}
     <a href ="https://app.netlify.com/projects/weather-react-petunia">hosted on Netlify</a>
      </p>
    </footer>
    </div>
   
  );
}
  
