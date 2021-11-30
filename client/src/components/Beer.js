import React from "react";
import BorderedDiv from "./BorderedDiv";

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