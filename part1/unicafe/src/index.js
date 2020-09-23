import React, { useState } from "react";
import ReactDOM from "react-dom";

import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const all = good + bad + neutral;
  const positive = (good * 100) / all;

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button
          onClick={() => {
            setGood(good + 1);
            setAverage(average + 1);
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);

            setAverage(average - 1);
          }}
        >
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      {all === 0 ? (
        <p>no Feedback given</p>
      ) : (
        <Statistics
          bad={bad}
          good={good}
          neutral={neutral}
          average={average}
          all={all}
          positive={positive}
        ></Statistics>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
