import React from "react";

const Total = (props) => {
  let exercises = 0;
  props.parts.map((i) => (exercises += i.exercises));
  return <p>Number of exercises {exercises}</p>;
};

export default Total;
