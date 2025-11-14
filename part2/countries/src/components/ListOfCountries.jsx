const ListOfCountries = ({
  countriesToShow,
  setCountryToShow,
}) => {
  const handleClick = (fc) => {
    setCountryToShow(fc);
  };
  return countriesToShow.map((fc) => (
    <p key={fc.name.official}>
      {fc.name.common} <button onClick={() => handleClick(fc)}>Show</button>
    </p>
  ));
};

export default ListOfCountries;
