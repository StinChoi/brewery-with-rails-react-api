import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const BeerForm = () => {
  const [name, setName] = useState("");
  const [abv, setAbv] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Clicked");
    console.log({ name, abv });
  };
  return (
    <BorderedDiv color="blue">
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>abv</p>
        <input
          type="number"
          value={abv}
          onChange={(e) => setAbv(e.target.value)}

        />
        <button type="submit">Add</button>
      </form>
    </BorderedDiv>
  );
};

export default BeerForm;