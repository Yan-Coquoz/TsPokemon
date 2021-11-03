import React, { FunctionComponent, useState, useEffect } from "react";
import POKEMON from "./Models/mock-pokemon"; // import des données
import Pokemon from "./Models/pokemon"; // import des types

import "./style.css";

const App: FunctionComponent = () => {
  // const [name, setName] = useState<String>("Yan");
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    setPokemon(POKEMON);
  }, []);

  return (
    <>
      <h1>Pokémons</h1>
      <p>
        <span>Il y a {pokemons.length} pokemons dans mon tableau !</span>{" "}
      </p>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="Card">
            <img src={pokemon.picture} alt={pokemon.name} />
            <div>
              <p>{pokemon.name}</p> <p>{pokemon.hp} HP</p>
              <p>{pokemon.created.toDateString()}</p>
              <p>{pokemon.cp} CP</p>
              <p>{pokemon.types.map((type) => type + " ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
