import React from "react";
import BorderedDiv from "./BorderedDiv";
// Following James's example
// setting up a bordered div to re-call it in another file to help with style
const Beer = (props) => {
  return (
    <BorderedDiv color="black">
      <p>name: {props.name}</p>
      <p>abv: {props.abv}</p>
      <p>id: {props.id}</p>
      <p>style: {props.style}</p>
    </BorderedDiv>
  );
};

export default Beer