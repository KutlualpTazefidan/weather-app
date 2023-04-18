function Form({ onAddActivity }) {
  function onSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }
  function clearLocalStorage() {
    localStorage.clear()
  }
  return (
    <form onSubmit={onSubmitForm}>
      <h1>Add new Activity</h1>
      <label htmlFor="inputName">Name: </label>
      <input type="text" id="inputName" name="inputField" /> <br />
      <label htmlFor="goodWeatherCheckBox">Good-weather activity: </label>
      <input type="checkbox" id="goodWeatherCheckBox" name="checkboxField" />
      <br />
      <input
        type="submit"
        className="new-activity-submit-button"
        aria-label="new activity submit button"
        value="Submit"
      />
      <button type="button" onClick={clearLocalStorage}> Clear Local Storage</button> 
    </form>
  );
}

export default Form;
