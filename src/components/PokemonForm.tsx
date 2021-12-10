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
  const [form, setForm] = useState<Form>({
    name: { value: pokemon.name, isValid: true },
    cp: { value: pokemon.cp, isValid: true },
    hp: { value: pokemon.hp, isValid: true },
    types: { value: pokemon.types, isValid: true },
  });

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
  const history = useHistory();

  const hasType = (type: string): boolean => {
    return form.types.value.includes(type);
  };
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = evt.target.name;
    const fieldValue: string = evt.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };
    setForm({ ...form, ...newField });
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
    setForm({ ...form, ...{ types: newField } });
  };

  const handleOnSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(form); // affiche le state du formulaire
    const isFormValid = validateForm();
    if (isFormValid) {
      history.push(`/pokemons/${pokemon.id}`);
    }
  };

  const validateForm = () => {
    let newForm: Form = form;

    // Validator name
    if (!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
      const errorMsg: string = "Le nom du pokémon est requis (1-25).";
      const newField: Field = {
        value: form.name.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ name: newField } };
    } else {
      const newField: Field = {
        value: form.name.value,
        error: "",
        isValid: true,
      };
      newForm = { ...newForm, ...{ name: newField } };
    }

    // Validator hp
    if (!/^[0-9]{1,3}$/.test(form.hp.value)) {
      const errorMsg: string =
        "Les points de vie du pokémon sont compris entre 0 et 999.";
      const newField: Field = {
        value: form.hp.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ hp: newField } };
    } else {
      const newField: Field = {
        value: form.hp.value,
        error: "",
        isValid: true,
      };
      newForm = { ...newForm, ...{ hp: newField } };
    }

    // Validator cp
    if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
      const errorMsg: string =
        "Les dégâts du pokémon sont compris entre 0 et 99";
      const newField: Field = {
        value: form.cp.value,
        error: errorMsg,
        isValid: false,
      };
      newForm = { ...newForm, ...{ cp: newField } };
    } else {
      const newField: Field = {
        value: form.cp.value,
        error: "",
        isValid: true,
      };
      newForm = { ...newForm, ...{ cp: newField } };
    }

    setForm(newForm);
    return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
  };
  const isTypesValid = (type: string): boolean => {
    // Cas n°1: Le pokémon a un seul type, qui correspond au type passé en paramètre.
    // Dans ce cas on revoie false, car l'utilisateur ne doit pas pouvoir décoché ce type (sinon le pokémon aurait 0 type, ce qui est interdit)
    if (form.types.value.length === 1 && hasType(type)) {
      return false;
    }

    // Cas n°1: Le pokémon a au moins 3 types.
    // Dans ce cas il faut empêcher à l'utilisateur de cocher un nouveau type, mais pas de décocher les types existants.
    if (form.types.value.length >= 3 && !hasType(type)) {
      return false;
    }

    // Après avoir passé les deux tests ci-dessus, on renvoie 'true',
    // c'est-à-dire que l'on autorise l'utilisateur à cocher ou décocher un nouveau type.
    return true;
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
                  {form.name.error && (
                    <div className="card-panel red accent-1">
                      {form.name.error}
                    </div>
                  )}
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
                  {form.hp.error && (
                    <div className="card-panel red accent-1">
                      {form.hp.error}
                    </div>
                  )}
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
                  {form.cp.error && (
                    <div className="card-panel red accent-1">
                      {form.cp.error}
                    </div>
                  )}
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
                          disabled={!isTypesValid(type)}
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
