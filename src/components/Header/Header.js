import "./Header.css";
function Header({ weather }) {
  const weatherMessage = weather.isGoodWeather
    ? "The weather is awesome! Go outside and:"
    : "Bad weather outside! Here is what you can do now";
  return (
    <>
      <div className="weather-status-bar">
        {weather.condition} {weather.temperature}
      </div>
      <p className="weather-message">{weatherMessage}</p>
    </>
  );
}

export default Header;
