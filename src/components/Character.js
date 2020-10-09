import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  border: 3px solid black;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right:10%;
  margin-left:10%;
  background-color: white;
  color: black;
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;

  &:hover {
    background-color: black;
    color:white;
    border: 3px solid white;
    transform: scale(1.2);
    transition:transform 0.5s;

    transition all 0.5s ease-in-out;
  }
  transition all 0.5s ease-in-out;
  transform: scale(1);
  transition:transform 0.7s;


  h1 {
    color: red;
  }
`;

export default function Character(data) {
  return (
    <StyledCharacter className="App">
        <img src={data.character.image} />
      <h1>Name: {data.character.name}</h1>
      <p>Status: {data.character.status}</p>
      <p>Species: {data.character.species}</p>
      <p>Gender: {data.character.gender}</p>
      <p>Created: {data.character.created}</p>
    </StyledCharacter>
  );
}
