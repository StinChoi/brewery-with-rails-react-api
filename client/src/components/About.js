import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BeerForm from "./BeerForm"

const About = () => {
  const [beer, setBeer] = useState({});
  const params = useParams();
  const getBeer = async () => {
    let result = await axios.get(`/api/beers/${params.id}`)
    setBeer(result.data);
  }
  useEffect(() => {
    getBeer();
  }, []);
  // update beer function goes here
  return (
    <div>
      <h1>About Beer</h1>
      <p></p>
      <h3>Edit Beer</h3>
      <BeerForm />

    </div>
  )
};

export default About;
