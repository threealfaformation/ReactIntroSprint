import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import type { Pokemon } from "../Types";
import { useNavigate } from "react-router-dom";
const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pokemon")
      .then((response) => {
        console.log(response.data , "data response");
        
        setPokemons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Pokémons</h2>
      <button onClick={()=> navigate("/addpokemon")} > add pokemon</button>
      <ul className="pokemon-list">
        {pokemons.map((el: Pokemon, index) => (
          <div key={index}>
            <h1  onClick={()=>navigate(`/pokemondetails/${el._id}`) }   > {el.name} </h1>
            <img src={el.imageUrl} alt="" />

          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
