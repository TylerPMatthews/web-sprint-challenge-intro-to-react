import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import  Character  from "./components/Character.js";
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charactersData, setCharactersData] = useState([]);
  // const data = useState([])
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setCharactersData(res.data.results);
      })
      .catch((err) => {
        console.log("error has occured");
      });
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="Header">Characters</h1>
        {charactersData.map((character, index) => (
        <Character key={index} character={character} />))}
      </div>
    </>
  );
};
export default App;
