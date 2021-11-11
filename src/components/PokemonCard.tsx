import React, { FunctionComponent } from "react";
import Pokemon from "../Models/pokemon";
import formatDate from "./helpers/format-date";
import formatType from "./helpers/format-type";
import { useHistory } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  const history = useHistory();

  const goToPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  };
  return (
    <>
      <li className="Card" onClick={() => goToPokemon(pokemon.id)}>
        <img src={pokemon.picture} alt={pokemon.name} />

        <div>
          <p>{pokemon.name}</p> <p>{pokemon.hp} HP</p>
          <p>{formatDate(pokemon.created)}</p>
          <p>{pokemon.cp} CP</p>
          <p>
            {pokemon.types.map((type) => {
              return (
                <span key={type} className={formatType(type)}>
                  {type}
                </span>
              );
            })}
          </p>
        </div>
      </li>
    </>
  );
};

export default PokemonCard;
