import "./App.css";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
//import { wait } from "@testing-library/user-event/dist/utils";
import Header from "./components/Header/Header";
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState (true)
  useEffect (() =>{
      async function  fetchWeather() {
    try {
      const URL = "https://example-apis.vercel.app/api/weather/rainforest"   //https://example-apis.vercel.app/api/weather/arctic

      const response = await fetch (URL)
      const weatherData = await response.json ()
      setWeather (weatherData)
      console.log(weather);
    } catch (error) {
      console.log(error);
    }
  }
  fetchWeather()
  },[]) 

  function clearLocalStorage() {
    setActivities([]);
    localStorage.clear();
  }
  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities", activities);
  }

  return (
    <div className="App">
      <Header weather={weather} />
      <List activities={activities} isGoodWeather={weather.isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
      <button type="button" onClick={clearLocalStorage}>
        {" "}
        Clear Local Storage and Activities

      </button>
      
    </div>
  );
}

export default App;
