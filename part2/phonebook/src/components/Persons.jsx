const Persons = ({ persons, nameFilter, handleDelete }) => {
  const nameFilterLower = nameFilter.toLowerCase();
  return persons
    .filter((p) => p.name.toLowerCase().includes(nameFilterLower))
    .map((fp) => (
      <p key={fp.name}>
        {fp.name} {fp.number}
        <button onClick={() => handleDelete(fp.id, fp.name)}>delete</button>
      </p>
    ));
};

export default Persons;
