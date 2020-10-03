import React from "react";

const Phonebook = ({ persons, nameRemover }) => {
  return (
    <>
      <h2>all Numbers</h2>
      {persons.map((item) => (
        <p key={item.name}>
          {item.name} : {item.number}{" "}
          <button
            onClick={() => {
              nameRemover(item);
            }}
          >
            delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Phonebook;
