import { useEffect, useState } from "react";
import CountrySearchEngine from "./components/CountrySearchEngine";
import ListOfCountries from "./components/ListOfCountries";
import CountryDetails from "./components/CountryDetails";
import countriesServices from "./services/countries";

const App = () => {
  const [countryFilter, setCountryFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryToShow, setCountryToShow] = useState(null);

  const countriesToShow = countries.filter((c) =>
    c.name.common.toLowerCase().includes(countryFilter.toLowerCase())
  );

  useEffect(() => {
    countriesServices
      .getAllCountries()
      .then((allCountries) => setCountries(allCountries));
  }, []);

  useEffect(() => {
    if (countriesToShow.length === 1) {
      setCountryToShow(countriesToShow[0]);
    }
  }, [countriesToShow]);

  return (
    <>
      <CountrySearchEngine
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        setCountryToShow={setCountryToShow}
      />
      {countriesToShow.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countryToShow ? (
        <CountryDetails country={countryToShow} />
      ) : (
        <ListOfCountries
          countriesToShow={countriesToShow}
          setCountryToShow={setCountryToShow}
        />
      )}
    </>
  );
};

export default App;
