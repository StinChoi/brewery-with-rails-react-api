import axios from "axios";
import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const BeerForm = (props) => {
  const {addBeer} = props;
  const [name, setName] = useState("");
  const [abv, setAbv] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submit Clicked");
    // console.log({ name, abv });
    const newBeer = {
      name:name,
      abv:abv,
    };
    let result = await axios.post("/api/beers", newBeer)
    addBeer(result.data);
    setName("");
    setAbv("");
  };
  return (
    <BorderedDiv color="black">
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Abv</p>
        <input
          type="number"
          value={abv}
          onChange={(e) => setAbv(e.target.value)}

        />
        <button type="enter">Add</button>
      </form>
    </BorderedDiv>
  );
};

export default BeerForm;