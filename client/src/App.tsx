import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Pokedetails from "./components/Pokedetails";
import Newpokemon from "./components/Newpokemon";
import Privateroute from "./Private"
import Auth from "./components/Auth";
import { Provider} from "react-redux"
import {boutique} from "./app/store"
const App: React.FC = () => {
  return (
    <Provider store={boutique}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemondetails/:id" element={<Pokedetails />} />
        <Route  path="/addpokemon" 
         element={<Privateroute  > <Newpokemon/> </Privateroute  >} />
        <Route  path="/auth" element= { <Auth/>}   ></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
