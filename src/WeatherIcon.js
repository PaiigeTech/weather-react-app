import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiRain,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export default function WeatherIcon({ code, size }) {
  const iconMapping = {
    "01d": <WiDaySunny size={size} color="#1e1e1e" />,
    "01n": <WiNightClear size={size} color="#1e1e1e" />,
    "02d": <WiDayCloudy size={size} color="#1e1e1e" />,
    "02n": <WiNightAltCloudy size={size} color="#1e1e1e" />,
    "03d": <WiCloud size={size} color="#1e1e1e" />,
    "03n": <WiCloud size={size} color="#1e1e1e" />,
    "04d": <WiCloud size={size} color="#1e1e1e" />,
    "04n": <WiCloud size={size} color="#1e1e1e" />,
    "09d": <WiRain size={size} color="#1e1e1e" />,
    "09n": <WiRain size={size} color="#1e1e1e" />,
    "10d": <WiRain size={size} color="#1e1e1e" />,
    "10n": <WiRain size={size} color="#1e1e1e" />,
    "11d": <WiRain size={size} color="#1e1e1e" />,
    "11n": <WiRain size={size} color="#1e1e1e" />,
    "13d": <WiSnow size={size} color="#1e1e1e" />,
    "13n": <WiSnow size={size} color="#1e1e1e" />,
    "50d": <WiFog size={size} color="#1e1e1e" />,
    "50n": <WiFog size={size} color="#1e1e1e" />,
  };

  return iconMapping[code] || <WiDaySunny size={size} color="#1e1e1e" />;
}