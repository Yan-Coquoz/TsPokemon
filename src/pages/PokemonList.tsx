import React, { FunctionComponent, useState, useEffect } from "react";
import POKEMON from "../Models/mock-pokemon"; // import des données
import Pokemon from "../Models/pokemon"; // import des types
import PokemonCard from "../components/PokemonCard";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    setPokemon(POKEMON);
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>
      <p>
        <span>Il y a {pokemons.length} pokemons dans mon tableau !</span>{" "}
      </p>
      <ul>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};
export default PokemonList;
