import axios from "axios";
import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const BeerForm = (props) => {
  const { addBeer, id, name: oldName, abv: oldAbv, updateBeer } = props;
  const [name, setName] = useState(oldName ? oldName : "");
  const [abv, setAbv] = useState(oldAbv ? oldAbv : "");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submit Clicked");
    // console.log({ name, abv });
    const newBeer = {
      name: name,
      abv: abv,
    };
    if (id) {
      let result = await axios.put(`/api/beers/${id}`, newBeer)
      updateBeer(result.data);
    } else {
      let result = await axios.post("/api/beers", newBeer)
      addBeer(result.data);
      // setName("");
      // setAbv("");

    };

  };
  console.log(name);
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