import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
import Newpokemon from "./components/newPokemon";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemondetails/:id" element={<Pokedetails />} />
        <Route path="/addpokemon" element={<Newpokemon />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
