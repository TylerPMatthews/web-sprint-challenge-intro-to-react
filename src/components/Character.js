import React from "react";
import styled from "styled-components";

export default function Character(data) {
  return (
    <div className="App">
      <h1>Name: {data.character.name}</h1>
      <img src={data.character.url} alt={data.character.alt} />
      <h3>Created: {data.character.created}</h3>
      <h3>Edited: {data.character.edited}</h3>
      <p>height: {data.character.height}</p>
      <p>Hair Color: {data.character.mass}</p>
      <div>
        <p>Vehicles: {data.character.vehicles}</p>
        <p>Starships: {data.character.starships}</p>
      </div>
    </div>
  );
}
