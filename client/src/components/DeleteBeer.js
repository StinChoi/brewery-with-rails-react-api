import React, {useState, useEffect} from "react";
import axios from "axios";
import BorderedDiv from "./BorderedDiv";




const DeleteBeer = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
    getBeers();
    }, []);

    const getBeers = async () => {
        let response = await axios.get("/api/beers");
        setBeers(response.data);
    };

    const deleteBeer = async (id) => {
        let res = await axios.delete(`/api/beers/${id}`);
        console.log(res.data);
        let filtered = beers.filter((beer)=> beer.id !== id);
        setBeers(filtered);
    };

    const renderBeers = () => {
        if (beers.length === 0) {
            return <p>No Beers Available</p>;
        } else
        return beers.map((beer) => {
            return (
                <BorderedDiv>
                    <h3>{beer.name}</h3>
                    <button onClick={()=>deleteBeer(beer.id)}>Delete beer</button>
                </BorderedDiv>
            )
        })
    }

    return (
        <div>
            <h1>Delete Beer Page</h1>
            {renderBeers()}
        </div>
    );
};

export default DeleteBeer;