import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import Pokemon from "../Models/pokemon";
import formatType from "./helpers/format-type";

type Props = {
  pokemon: Pokemon;
};

// Modelisation d'un champ
type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};
// représentation du formulaire avec ces champs disponibles
type Form = {
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};
const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const [form, setFrom] = useState<Form>({
    name: { value: pokemon.name, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

  const history = useHistory();
  const types: string[] = [
    "Plante",
    "Feu",
    "Eau",
    "Insecte",
    "Normal",
    "Electrik",
    "Poison",
    "Fée",
    "Vol",
    "Combat",
    "Psy",
  ];

  const hasType = (type: string): boolean => {
    return form.types.value.includes(type);
  };
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = evt.target.name;
    const fieldValue: string = evt.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };
    setFrom({ ...form, ...newField });
  };
  const selectType = (
    type: string,
    evt: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const checked = evt.target.checked;
    let newField: Field;
    if (checked) {
      // concat : permet de fusionner 2 tableaux
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
    } else {
      // filter : créer un nouveau tableau, ici sans la valeur décochée
      const newTypes: string[] = form.types.value.filter(
        (currentType: string) => currentType !== type,
      );
      newField = { value: newTypes };
    }
    setFrom({ ...form, ...{ types: newField } });
  };

  const handleOnSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(form); // affiche le state du formulaire
    history.push(`/pokemons/${pokemon.id}`);
  };

  return (
    <form onSubmit={handleOnSubmitForm}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                style={{ width: "250px", margin: "0 auto" }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={form.name.value}
                    onChange={handleInputChange}
                  ></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input
                    id="hp"
                    name="hp"
                    type="number"
                    className="form-control"
                    onChange={handleInputChange}
                    value={form.hp.value}
                  ></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input
                    id="cp"
                    name="cp"
                    type="number"
                    className="form-control"
                    onChange={handleInputChange}
                    value={form.cp.value}
                  ></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                          value={type}
                          checked={hasType(type)}
                          onChange={(e) => selectType(type, e)}
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
