import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Phonebook from "./components/Phonebook";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  // fetching the data from json-server (i,e: db.json)
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);
  // function that fires after the submit
  const personsAdder = (e) => {
    e.preventDefault();
    const personsObject = { name: newName, number: newNumber };

    //checking if the name exists
    const nameChecker = persons.filter(
      (person) => person.name === personsObject.name
    );
    nameChecker.length > 0
      ? window.alert(`${personsObject.name} already exists`)
      : setPersons(persons.concat(personsObject));

    setNewName("");
    setNewNumber("");
  };

  //function that fires when writing a names
  const nameAdder = (e) => {
    setNewName(e.target.value);
  };

  //function that fires when writing a numbers
  const numberAdder = (e) => {
    setNewNumber(e.target.value);
  };
  //search logic
  const searchFunction = (e) => {
    setQuery(e.target.value);
    let regularExp = new RegExp(query, "gmi");
    const search = persons.filter((item) => item.name.match(regularExp));
    e.target.value === "" ? setSearchValue([]) : setSearchValue(search);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <span>filter shown with </span>
      <input placeholder="type a name here" onChange={searchFunction}></input>
      <h3>add a new</h3>
      <Form
        personsAdder={personsAdder}
        newName={newName}
        newNumber={newNumber}
        nameAdder={nameAdder}
        numberAdder={numberAdder}
      ></Form>

      {query.length === 0 ? (
        <Phonebook persons={persons}></Phonebook>
      ) : (
        <Filter searchValue={searchValue}></Filter>
      )}
    </div>
  );
};

export default App;
