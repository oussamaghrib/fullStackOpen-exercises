import React from "react";

const Phonebook = ({ persons }) => {
  return (
    <>
      <h2>all Numbers</h2>
      {persons.map((item) => (
        <p key={item.name}>
          {item.name} : {item.number}
        </p>
      ))}
    </>
  );
};

export default Phonebook;
