import React from "react";

const ShowACountry = ({ matches, index }) => {
  return (
    <div>
      <h2>{matches[index].name}</h2>
      <p>capital : {matches[index].capital}</p>
      <p>population : {matches[index].population}</p>
      <h4>languages</h4>
      <ul>
        {matches[index].languages.map((item) => (
          <li key={item.iso639_2}> {item.name}</li>
        ))}
      </ul>
      <img
        src={matches[index].flag}
        alt={`the flag of ${matches[index].name}`}
        width="100px"
      ></img>
    </div>
  );
};
export default ShowACountry;
