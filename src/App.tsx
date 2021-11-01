import React, { FunctionComponent, useState } from "react";
import POKEMON from "./Models/mock-pokemon";
import Pokemon from "./Models/pokemon";

const App: FunctionComponent = () => {
  // const [name, setName] = useState<String>("Yan");
  const [pokemons] = useState<Pokemon[] | []>(POKEMON); // setPokemeons n'est pas obligatoire car ion ne l'utilise pas !

  return (
    <div>
      <h1>il y a {pokemons.length} pokemons dans mon tableau !</h1>
    </div>
  );
};

export default App;
