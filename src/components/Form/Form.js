function Form(onAddActivity) {
  return (
    <form>
      <h1>Add new Activity</h1>
      <label htmlFor="inputName">Name: </label>
      <input type="text" id="inputName" /> <br />
      <label htmlFor="goodWeatherCheckBox">Good-weather activity: </label>
      <input type="checkbox" id="goodWeatherCheckBox" /> <br />
      <button
        type="button"
        className="new-activity-submit-button"
        aria-label="new activity submit button"
        onClick={onAddActivity}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
