import "./App.css";
import Form from "./components/Form/Form";
//import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
//import { wait } from "@testing-library/user-event/dist/utils";
import Header from "./components/Header/Header";
import useFetchWeatherData from "./Hooks/useFetchWeatherData";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const weather = useFetchWeatherData();

  return (
    <div className="App">
      <Header weather={weather} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
      {/* <button type="button" onClick={clearLocalStorage}>
        {" "}
        Clear Local Storage and Activities
      </button> */}
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
  function clearLocalStorage() {
    setActivities([]);
    localStorage.clear();
  }
}

export default App;
