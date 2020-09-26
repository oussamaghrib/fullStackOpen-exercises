import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.personsAdder}>
      <div>
        name: <input value={props.newName} onChange={props.nameAdder} /> <br />
        <br />
        number: <input value={props.newNumber} onChange={props.numberAdder} />
        <br />
        <br />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
