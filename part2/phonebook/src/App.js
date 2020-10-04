import React, { useState, useEffect } from "react";
import {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
} from "./services/persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Phonebook from "./components/Phonebook";
import PersonNotification from "./components/PersonNotification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [notification, setNotification] = useState("");
  const [errMsg, setErrMsg] = useState(false);

  // fetching the data from json-server (i,e: db.json)
  useEffect(() => {
    getPersons().then((res) => setPersons(res));
  }, []);
  // function that fires after the submit
  const personsAdder = (e) => {
    e.preventDefault();
    const personsObject = { name: newName, number: newNumber };

    //checking if the name exists

    const nameChecker = persons.filter(
      (person) => person.name === personsObject.name
    );
    if (nameChecker.length > 0) {
      // updating the number if the user confirmed

      updatePerson(nameChecker, newNumber)
        .then((req) => {
          const personsCopy = persons;
          const index = personsCopy.indexOf(nameChecker[0]);
          personsCopy[index] = {
            ...req,
          };

          setPersons([...personsCopy]);
        })
        .then(() => {
          window.confirm(`you want to update ${nameChecker[0].name}`);
        })
        .then(() => setNotification(`${nameChecker[0].name} was updated`))
        .catch(() => {
          setErrMsg(true);
          setNotification(
            `you can't update ${nameChecker[0].name} because it doesn't exist anymore`
          );
        });

      setNewName("");
      setNewNumber("");
      //the function the shows the notification for 5 seconds after the content was updated

      setTimeout(() => {
        setNotification("");
        setErrMsg(false);
      }, 5000);
    } else {
      //adding a new user if the name was not already in the phonebook
      setPersons(persons.concat(personsObject));
      addPerson(personsObject);
      setNewName("");
      setNewNumber("");
      //the function the shows the notification for 5 seconds after the content was added
      const notificationSetter = () => {
        setNotification(`${personsObject.name} was added`);
        setTimeout(() => {
          setNotification("");
        }, 5000);
      };
      notificationSetter();
    }
  };

  //function that fires when writing a names
  const nameAdder = (e) => {
    setNewName(e.target.value);
  };

  //function that fires when writing a numbers
  const numberAdder = (e) => {
    setNewNumber(e.target.value);
  };
  // function that delete a person
  const nameRemover = (item) => {
    const X = window.confirm(
      `do you really want to delete ${item.name} from your phonebook`
    );
    if (X === true) {
      const personsCopy = persons.filter((el) => el !== item);
      deletePerson(item);
      setPersons([...personsCopy]);
    }
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
      <PersonNotification
        notification={notification}
        errMsg={errMsg}
      ></PersonNotification>
      <h3>add a new</h3>
      <Form
        personsAdder={personsAdder}
        newName={newName}
        newNumber={newNumber}
        nameAdder={nameAdder}
        numberAdder={numberAdder}
      ></Form>

      {query.length === 0 ? (
        <Phonebook persons={persons} nameRemover={nameRemover}></Phonebook>
      ) : (
        <Filter searchValue={searchValue}></Filter>
      )}
    </div>
  );
};

export default App;
