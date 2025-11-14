const Weather = ({ capital, weather }) => (
  <div>
    <h2>Weather in {capital}</h2>
    <p>Temperature {weather.main.temp} Celsius</p>
    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    />
    <p>Wind {weather.wind.speed}</p>
  </div>
);

export default Weather
