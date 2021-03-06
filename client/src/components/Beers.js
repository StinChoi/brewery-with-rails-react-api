import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Beer from "./Beer";
import BeerForm from "./BeerForm";
import BorderedDiv from "./BorderedDiv"
// Making a GET request for my beers

const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    console.log("mounted");
    getBeers();
  }, []);
  // inputting axios call
  const getBeers = async () => {
    let response = await axios.get("/api/beers");
    setBeers(response.data);
  };
  // add beer to ui
  const addBeer = (beer) => {
    setBeers([...beers, beer]);
  };

  // render method
  const renderBeers = () => {
    if (beers.length === 0) {
      return <p>No Beers</p>;
    }
    return beers.map((beer) => {
      return (
        <div>
          <Beer key={beer.id} {...beer} />
          <Link to={`/beers/${beer.id}`}>View this Beer</Link>
        </div>);
    });
  };
  // Following James's example to color coordinate my items / returning my Beer components
  return (
    <BorderedDiv color="goldenrod">
      <h1>Beers Listed Below</h1>
      <BeerForm addBeer={addBeer} />
      {renderBeers()}
    </BorderedDiv>
  );
};

export default Beers;