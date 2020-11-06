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
  span{
   color:blue;
  }
 
`;

export default function Character(props) {
  return (
    <StyledCharacter className="App">
      <img src={props.character.image} />
      <h1>Name: {props.character.name}</h1>
      <p>
        <span>{props.character.status}</span>
      </p>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Created: {props.character.created}</p>
    </StyledCharacter>
  );
}
