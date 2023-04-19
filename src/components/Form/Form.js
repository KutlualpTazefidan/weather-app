import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { BsSendPlusFill } from "react-icons/bs";
import "./Form.css";
import { useState } from "react";

function Form({ onAddActivity, onBackgroundBlur }) {
  function onSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }
  const [isAddActivityButtonPressed, setIsAddActivityButtonPressed] =
    useState(true);
  const [formClassName, setFormClassName] = useState("add-activity-form");
  function handleAddActivityButtonPressed() {
    setIsAddActivityButtonPressed(!isAddActivityButtonPressed);
    isAddActivityButtonPressed
      ? setFormClassName("add-activity-form active")
      : setFormClassName("add-activity-form");
    // onBackgroundBlur(isAddActivityButtonPressed);
  }
  return (
    <>
      <button
        className="add-activity-button"
        type="button"
        onClick={handleAddActivityButtonPressed}
      >
        {isAddActivityButtonPressed ? <HiPlusCircle /> : <HiMinusCircle />}
      </button>
      <form className={formClassName} onSubmit={onSubmitForm}>
        <p className="activity-form-heading">new activity</p>
        <div className="input-field">
          <label className="form-label" htmlFor="inputName">
            Name:
          </label>
          <input type="text" id="inputName" name="inputField" /> <br />
        </div>
        <div className="input-field">
          <label className="form-label" htmlFor="goodWeatherCheckBox">
            Outside Activity:{" "}
          </label>
          <input
            type="checkbox"
            id="goodWeatherCheckBox"
            name="checkboxField"
          />
        </div>
        <button
          type="submit"
          className="new-activity-submit-button"
          aria-label="new activity submit button"
        >
          <BsSendPlusFill />
        </button>
      </form>
    </>
  );
}

export default Form;
