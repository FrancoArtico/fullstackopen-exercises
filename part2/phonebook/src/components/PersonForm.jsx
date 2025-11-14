import phonebookServices from "../services/phonebook";
import { useState } from "react";

const PersonForm = ({ persons, setPersons, setMessage, setMessageType }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (persons.some((p) => p.name === newName.trim())) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newPhone };
        phonebookServices
          .updateContact(changedPerson)
          .then((changedPerson) => {
            setPersons(
              persons.map((p) => (p.id === person.id ? changedPerson : p))
            );
          })
          .catch((e) => {
            setMessageType("error");
            setMessage(
              `Information of ${person.name} has already been removed from server`
            );
            setTimeout(() => setMessage(null), 5000);
            setPersons(persons.filter((p) => p.id !== person.id));
          });
      }
    } else {
      const newPerson = {
        name: newName.trim(),
        number: newPhone,
      };
      phonebookServices.create(newPerson).then((returnedPerson) => {
        setMessageType("success");
        setMessage(`Added ${newPerson.name}`);
        setTimeout(() => setMessage(null), 5000);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewPhone("");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input onChange={(e) => setNewName(e.target.value)} value={newName} />
      </div>
      <div>
        number:
        <input onChange={(e) => setNewPhone(e.target.value)} value={newPhone} />
      </div>
      <div>
        <button type="submits">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
