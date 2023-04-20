import "./Header.css";
function Header({ weather }) {
  const weatherMessage = weather.isGoodWeather
    ? `The weather is awesome!\nGo outside and:`
    : "Bad weather outside!\nYou can do:";
  return (
    <>
      <div className="weather-status-bar">
        {weather.condition} {weather.temperature} °C
      </div>
      <p className="weather-message">{weatherMessage}</p>
    </>
  );
}

export default Header;
