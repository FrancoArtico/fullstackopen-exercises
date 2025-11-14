import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather"
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY

const getAllCountries = () => (
  axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(res => res.data)
)

const getWeather = (capital) => (
  axios
    .get(`${weatherUrl}?q=${capital}&appid=${weatherApiKey}&units=metric`)
    .then(res => res.data))

export default { getAllCountries, getWeather }