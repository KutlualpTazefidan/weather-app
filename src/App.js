import "./App.css";
import Form from "./components/Form/Form";
//import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
//import { wait } from "@testing-library/user-event/dist/utils";
import Header from "./components/Header/Header";
import useFetchWeatherData from "./Hooks/useFetchWeatherData";
import { useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weatherURL, setWeatherURL] = useState(
    "https://example-apis.vercel.app/api/weather/rainforest"
  );
  const [backgroundBlur, setBackgroundBlur] = useState("App");

  const weather = useFetchWeatherData(weatherURL);

  return (
    <div className="App">
      <Header weather={weather} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form
        onAddActivity={handleAddActivity}
        onFetchWeather={handleFetchWeather}
        onBackgroundBlur={handleBackgroundBlur}
      />
      <div className="background-container">
        <BackgroundAnimation weather={weather} />
      </div>
    </div>
  );

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities", activities);
  }
  function handleDeleteActivity(activityId) {
    const filteredActivities = activities.filter(
      (activity) => activity.id !== activityId
    );
    setActivities(filteredActivities);
  }
  function handleBackgroundBlur(blur) {
    blur ? setBackgroundBlur("App App--blur") : setBackgroundBlur("App");
  }
  function handleFetchWeather(weatherLocation) {
    const URL = `https://example-apis.vercel.app/api/weather/${weatherLocation}`;
    setWeatherURL(URL);
    console.log(URL);
  }
  // function clearLocalStorage() {
  //   setActivities([]);
  //   localStorage.clear();
  // }
}

export default App;
