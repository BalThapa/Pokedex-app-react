import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import PokeSingle from "./components/PokeSingle";
import PokeList from "./components/PokeList";
import Layout from "./pages/Layout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<PokeList />} />
          <Route path="pokedex/:pokesingle" element={<PokeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
