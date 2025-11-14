const Filter = ({ nameFilter, setNameFilter }) => {
  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} value={nameFilter} />
    </div>
  );
};

export default Filter;
