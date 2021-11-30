import axios from "axios";
import { useState, useEffect } from "react";
import Beer from "./Beer";
import BeerForm from "./BeerForm";
import BorderedDiv from "./BorderedDiv"


const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    console.log("mounted");
    getBeers();
  }, []);
  const getBeers = async () => {
    let response = await axios.get("/api/beers");
    setBeers(response.data);
  };
  const renderBeers = () => {
    if (beers.length === 0) {
      return <p>No Beers</p>;
    }
    return beers.map((beer) => {
      return <Beer key={beer.id} {...beer} />;
    });
  };

  return (
    <BorderedDiv color="yellow">
      <h1>Beers Listed Below</h1>
      <BeerForm />
      {renderBeers()}
    </BorderedDiv>
  );
};

export default Beers;