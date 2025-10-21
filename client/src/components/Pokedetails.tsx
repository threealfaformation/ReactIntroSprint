import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams, useNavigate } from "react-router-dom";
import type { Pokemon } from "../Types";
import axios from "axios";
const Pokedetails: React.FC = () => {
  const nav = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pokemon/${id}`)
      .then((response) => {
        console.log(response.data, "response data");

        setPokemon(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {pokemon && (
        <div>
          <h1> {pokemon.name} </h1>
          <img src={pokemon.imageUrl} alt="" />
          <p>{pokemon.level}</p>
          <div>
            <p>
              <strong>Types:</strong> {pokemon.types.join(", ")}
            </p>
          </div>
        </div>
      )}

      <button onClick={() => nav("/")}> go back </button>
    </>
  );
};

export default Pokedetails;
