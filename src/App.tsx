import React, { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import "./style.css";

const App: FunctionComponent = () => {
  return (
    <div>
      <PokemonList />
    </div>
  );
};

export default App;
