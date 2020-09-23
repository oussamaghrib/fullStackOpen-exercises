import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  //to fill the array with zeros according to how many anecdotes we have
  const votesArray = Array.apply(null, Array(anecdotes.length)).map(
    Number.prototype.valueOf,
    0
  );

  // states
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesArray);

  // the function to generate random anecdotes
  const randomAnecdote = () => {
    setSelected(Math.floor(anecdotes.length * Math.random()));
  };
  // the function to update the votes
  const votesCalculator = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  // the function to get the maximum number votes

  const maxVotes = votes.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return (
    <>
      <h1>anecdote of the day</h1>
      <h4>{props.anecdotes[selected]}</h4>
      <p>this anecdote has {votes[selected]} votes</p>
      <button onClick={votesCalculator}>vote</button>
      <button onClick={randomAnecdote}>generate an anecdote</button>
      <h2>the most votes anecdote</h2>
      <p>{anecdotes[votes.indexOf(maxVotes)]}</p>
      <p>has {maxVotes} votes</p>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
