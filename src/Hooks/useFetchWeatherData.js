import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

function useFetchWeatherData(URL) {
  const [weather, setWeather] = useLocalStorageState("weatherData", {
    defaultValue: [],
  });
  useEffect(() => {
    async function fetchWeather() {
      try {
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
  }, [URL]);
  return weather;
}

export default useFetchWeatherData;
