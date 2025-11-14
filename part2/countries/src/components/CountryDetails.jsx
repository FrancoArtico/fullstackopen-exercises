import { useEffect, useState } from "react";
import countriesServices from "../services/countries";
import Weather from "./Weather";

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countriesServices.getWeather(country.capital).then((w) => {
      setWeather(w);
    });
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([languageKey, language]) => (
          <li key={languageKey}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      {weather ? (
        <Weather capital={country.capital} weather={weather} />
      ) : (
        <p>No weather information is available</p>
      )}
    </div>
  );
};

export default CountryDetails;
