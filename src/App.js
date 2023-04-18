import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/List/List";
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = true;

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
      <Form onAddActivity={handleAddActivity} />
      {isGoodWeather ? <p>Good weather</p> : <p>Bad weather</p>}
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <button type="button" onClick={clearLocalStorage}>
        {" "}
        Clear Local Storage and Activities
      </button>
    </div>
  );
}

export default App;
