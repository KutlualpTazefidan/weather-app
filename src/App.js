import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([{ name: "ert" }]);

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
