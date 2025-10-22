import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import type { Pokemon } from "../Types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const user = useSelector((state) => state.auth.user);
  console.log("user" , user);
  
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pokemon")
      .then((response) => {
        console.log(response.data, "data response");

        setPokemons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {user && <h1> {user.user.username} </h1>}
      <h2>Liste des Pokémons</h2>
      <button onClick={() => navigate("/addpokemon")}> add pokemon</button>
      <ul className="pokemon-list">
        {pokemons.map((el: Pokemon, index) => (
          <div key={index}>
            <h1 onClick={() => navigate(`/pokemondetails/${el._id}`)}>
              {" "}
              {el.name}{" "}
            </h1>
            <img src={el.imageUrl} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
