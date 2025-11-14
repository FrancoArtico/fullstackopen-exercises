const CountrySearchEngine = ({
  countryFilter,
  setCountryFilter,
  setCountryToShow,
}) => {
  const handleChange = (e) => {
    setCountryFilter(e.target.value);
    setCountryToShow(null);
  };

  return (
    <p>
      find countries <input onChange={handleChange} value={countryFilter} />
    </p>
  );
};

export default CountrySearchEngine;
