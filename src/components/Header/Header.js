function Header({weather}) {
  return (
    <>
    <div> {weather.condition} {weather.temperature}</div>
        {weather.isGoodWeather ? <p>Good weather</p> : <p>Bad weather</p>}
    </>
  )
}

export default Header