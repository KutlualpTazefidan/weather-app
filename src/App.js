import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state"
import List from "./components/List/List";
function App() {
  const [activities, setActivities] =useLocalStorageState ("activities", {defaultValue:  []});
  
  function clearLocalStorage() {
    setActivities([])
    localStorage.clear()
  }
  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities", activities);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} /> 
      <List activities={activities}/> 
      <button type="button" onClick={clearLocalStorage}> Clear Local Storage and Activities</button> 

    </div>
  );
}

export default App;
