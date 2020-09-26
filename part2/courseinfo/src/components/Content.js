import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item, index) => (
        <Part name={item.name} exercises={item.exercises} key={index}></Part>
      ))}
    </div>
  );
};

export default Content;
