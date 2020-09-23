import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good}></Statistic>
        <Statistic text="bad" value={props.bad}></Statistic>
        <Statistic text="neutral" value={props.neutral}></Statistic>
        <Statistic text="all" value={props.all}></Statistic>
        <Statistic text="average" value={props.average}></Statistic>
        <Statistic text="positive" value={props.positive}>
          %
        </Statistic>
      </tbody>
    </table>
  );
};
export default Statistics;
