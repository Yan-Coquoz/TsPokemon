# Application de Pokemon

**Technos :**

- React.js
- React router Dom
- TypeScript
- Materialize (styles)
- Json-server (simulation d'api)

## L'application

- Affichage d'une liste de pokemon.
- Utilisation de routes pour l'affichage d'une carte de pokemon en particulier et d'une page d'erreur en cas de mauvaise route.
- Grace à un formulaire, donné la possibilité d'édité un Pokemon.

## Le serveur
**Démarage du serveur Api (json-server) depuis le terminal** : 
```bash
json-server --watch src/Models/db.json --port=3001
```
- `--watch` => pour l'adresse du fichier
- `--port` => pour le port à ouvrir, il doit ếtre différant de React (3000)

Adresse à tester pour voir si le serveur est fonctionnel
http://localhost:3001/pokemons

**Depuis le package.json**
```json
"scripts":{
    "start:api":"json-server --watch src/Models/db.json --port=3001"
}
```