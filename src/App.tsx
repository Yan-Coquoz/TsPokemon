import React, { FunctionComponent, useState, useEffect } from "react";
import POKEMON from "./Models/mock-pokemon"; // import des données
import Pokemon from "./Models/pokemon"; // import des types

const App: FunctionComponent = () => {
  // const [name, setName] = useState<String>("Yan");
  const [pokemons, setPokemon] = useState<Pokemon[] | []>([]);
  useEffect(() => {
    setPokemon(POKEMON);
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>
      <p>il y a {pokemons.length} pokemons dans mon tableau !</p>
    </div>
  );
};

export default App;
