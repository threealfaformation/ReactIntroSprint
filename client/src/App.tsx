import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemondetails/:id" element={<Pokedetails />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
