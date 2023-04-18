import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state"
function App() {
  const [activities, setActivities] =useLocalStorageState ("activities", {defaultValue:  []});

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities", activities);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
