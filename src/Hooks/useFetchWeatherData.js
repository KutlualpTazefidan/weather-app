import { useState, useEffect } from "react";

function useFetchWeatherData() {
  const [weather, setWeather] = useState(true);
  useEffect(() => {
    async function fetchWeather() {
      try {
        const URL = "https://example-apis.vercel.app/api/weather/rainforest";
        // const URL = "https://example-apis.vercel.app/api/weather/arctic"
        const response = await fetch(URL);
        const weatherData = await response.json();
        console.log("fetch");
        setWeather(weatherData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeather();
    // const intervallId = setInterval(() =>{fetchWeather()},5000)
    // return () => clearInterval(intervallId)
  }, []);
  return weather;
}

export default useFetchWeatherData;