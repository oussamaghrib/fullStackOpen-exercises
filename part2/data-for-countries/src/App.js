import React, { useState, useEffect } from "react";
import axios from "axios";

import ShowACountry from "./components/ShowACountry";
function App() {
  const [countries, setCountries] = useState([]);
  const [matches, setMatches] = useState([]);
  const [visibilityState, setVisibilityState] = useState([]);

  //envirement variable

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  // search function
  const search = (e) => {
    const regex = new RegExp(e.target.value, "gmi");
    let allMatches = countries.filter((item) => item.name.match(regex));
    setMatches(allMatches);
    setVisibilityState(new Array(allMatches.length).fill(false));
  };
  // function that shows the country when clikcing on the "show" button
  const showCountry = (e) => {
    const visibilityStateCopy = visibilityState;
    visibilityStateCopy[e.target.value] = !visibilityStateCopy[e.target.value];
    setVisibilityState([...visibilityStateCopy]);
  };
  return (
    <div>
      {countries.length === 0 ? (
        <p>the server is not sending data now, please wait a bit </p>
      ) : (
        <div>
          <span>find a country</span>
          <input placeholder="typea country name" onChange={search}></input>
          <div>
            {matches.length > 10 ? (
              <div>too many cases</div>
            ) : matches.length === 1 ? (
              <ShowACountry
                matches={matches}
                index={0}
                capital={matches[0].capital}
              ></ShowACountry>
            ) : matches.length <= 10 ? (
              <div>
                {matches.map((item, index) => (
                  <div key={item.alpha3Code}>
                    <span> {item.name}</span> {"  "}
                    <button onClick={showCountry} value={index}>
                      show
                    </button>
                    <div
                      style={{
                        display: visibilityState[index] ? "block" : "none",
                      }}
                    >
                      <ShowACountry
                        matches={matches}
                        index={index}
                        capital={matches[index].capital}
                      ></ShowACountry>
                    </div>
                  </div>
                ))}{" "}
              </div>
            ) : null}
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
