import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Message from "./components/Message";
import phonebookServices from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    phonebookServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleDelete = (contactId, contactName) => {
    if (window.confirm(`Delete ${contactName}?`)) {
      phonebookServices.deleteContact(contactId).then((deletedContact) => {
        setPersons(persons.filter((p) => p.id !== deletedContact.id));
      });
    } else {
      console.log(`No delete ${contactName}`);
    }
  };

  console.log("fetched", persons.length, "persons");

  return (
    <div>
      <h2>Phonebook</h2>

      <Message message={message} messageType={messageType} />

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h3>Add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons}
        nameFilter={nameFilter}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
