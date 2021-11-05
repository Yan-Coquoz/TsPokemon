import React, { FunctionComponent } from "react";
import Pokemon from "../Models/pokemon";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
  const formatDate = (date: Date): string => {
    // getMonth donne le mois de janvier à 0
    return `${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  };
  const formatType = (type: string): string => {
    let color: string;
    // Code couleur pour materialize
    switch (type) {
      case "Feu":
        color = "red lighten-1";
        break;
      case "Eau":
        color = "blue lighten-1";
        break;
      case "Plante":
        color = "green lighten-1";
        break;
      case "Insecte":
        color = "brown lighten-1";
        break;
      case "Normal":
        color = "grey lighten-3";
        break;
      case "Vol":
        color = "blue lighten-3";
        break;
      case "Poison":
        color = "deep-purple accent-1";
        break;
      case "Fée":
        color = "pink lighten-4";
        break;
      case "Psy":
        color = "deep-purple darken-2";
        break;
      case "Electrik":
        color = "lime accent-1";
        break;
      case "Combat":
        color = "deep-orange";
        break;
      default:
        color = "grey";
        break;
    }

    return `chip ${color}`;
  };
  return (
    <>
      <li className="Card">
        <img src={pokemon.picture} alt={pokemon.name} />

        <div>
          <p>{pokemon.name}</p> <p>{pokemon.hp} HP</p>
          <p>{formatDate(pokemon.created)}</p>
          <p>{pokemon.cp} CP</p>
          <p>
            {pokemon.types.map((type) => {
              return (
                <span key={type} className={formatType(type)}>
                  {type}{" "}
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
