import axios from "axios";
import './PokeSingle.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const PokeSingle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      });
  }, [params.pokesingle]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokeSingle">
      <div className="singleCard">
        <h2>{data.name}</h2>
        <img
          src={data.sprites?.other.dream_world.front_default}
          alt={data.name}
        />
        <p>Type: {data.types && data.types.map((type) => type.type.name).join(", ")}</p>
        <p>
          Id: {data.id}
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PokeSingle;

