import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowACountry = ({ matches, index, capital }) => {
  const match = matches
  const [weather, setWeather] = useState(new Array(match.length).fill(0));
  const [location, setLocation] = useState(new Array(match.length).fill(0));
  const { REACT_APP_API_Access } = process.env;

  const URL = `http://api.weatherstack.com/current?access_key=${REACT_APP_API_Access}&query=${capital}`;
  useEffect(() => {
    axios.get(URL).then((res) => {
      if (res.data.success === undefined) {
      setWeather(res.data.current);
      setLocation(res.data.location)}
    })
  }, [URL]);

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
      
      <h4>weather in {location.name }</h4>
      <img src={weather.weather_icons} alt="weather icon"></img>
      <p>the temperature is {weather.temperature} Celcius</p>
      <p>humidity is {weather.humidity }%</p>
    </div>
  );
};
export default ShowACountry;
