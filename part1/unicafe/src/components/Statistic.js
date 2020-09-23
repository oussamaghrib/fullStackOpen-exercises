import React from "react";

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value}
        {props.children}
      </td>
    </tr>
  );
};

export default Statistic;
