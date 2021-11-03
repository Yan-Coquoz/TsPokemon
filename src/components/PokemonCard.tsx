import React, { FunctionComponent } from "react";
import Pokemon from "../Models/pokemon";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <div>
      <li className="Card">
        <img src={pokemon.picture} alt={pokemon.name} />
        <div>
          <p>{pokemon.name}</p> <p>{pokemon.hp} HP</p>
          <p>{pokemon.created.toDateString()}</p>
          <p>{pokemon.cp} CP</p>
          <p>{pokemon.types.map((type) => type + " ")}</p>
        </div>
      </li>
    </div>
  );
};

export default PokemonCard;
