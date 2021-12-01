import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BeerForm from "./BeerForm"

const About = () => {
  const [beer, setBeer] = useState("");
  const params = useParams();
  const getBeer = async () => {
    let result = await axios.get(`/api/beers/${params.id}`)
    setBeer(result.data);
    console.log(result.data);
  }
  useEffect(() => {
    getBeer();
  }, []);
  const updateBeer = (beer) => {
    setBeer(beer)
  }
  console.log(beer.name);
  return (
    <div>
      <h1>About Beer</h1>
      <p>{beer.name}</p>
      <h3>Edit Beer</h3>
      {beer.name ? <BeerForm id={beer.id} name={beer.name} abv={beer.abv} updateBeer={updateBeer} /> : <p>Loading</p>}
    </div>
  )
};

export default About;
