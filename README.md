# 🧩 Pokédex (Sequelize + Postgres)

Application web **Express** utilisant **Sequelize** (Active Record) et **PostgreSQL** pour gérer un Pokédex.  


<img src="./public/img/screenshot.gif" width="700" alt="Aperçu O'Chat">

## 🚀 En 30 secondes
- Liste des Pokémon
- Détail d’un Pokémon avec ses **types** (relation **many-to-many**)
- Liste des types + filtrage des Pokémon par type
- Architecture MVC (routes / controllers / models)
- Données persistées en base via Sequelize

## 🛠 Stack
- Node.js / Express
- PostgreSQL
- Sequelize (ORM)
- EJS (views)
- CSS (public)

## 📦 Installation
### Prérequis
- Node.js
- PostgreSQL

### 1. Créer la base et importer les scripts SQL
```bash
# Connexion postgres (Linux)
sudo -i -u postgres psql
CREATE USER pokedex WITH PASSWORD 'mdp';
CREATE DATABASE pokedex OWNER pokedex;
\q
```

```bash
# Import des tables + seed
psql -U pokedex -d pokedex -f data/pokedex_create_tables.sql
psql -U pokedex -d pokedex -f data/pokedex_seeding.sql
```

### 2. Variables d’environnement

Créer un fichier .env à la racine :

```env
PG_URL=postgres://pokedex:<mdp>@localhost:5432/pokedex
```

### 3. Lancer l’app

```bash
npm install
npm run dev
```

📚 Documentation

Schéma / MCD : `data/MCD.png`

Docs d’utilisation : `utilisation/`

<details> <summary><strong>🔍 Détails techniques (Sequelize / associations)</strong></summary>
  
### Modèles

- ``Pokemon``

- ``Type``

### Association

Relation N–N entre Pokémon et Type via une table de jointure :

- ``Pokemon.belongsToMany(Type, ...)``

- ``Type.belongsToMany(Pokemon, ...)``

### Organisation

- ``models/`` : définition des modèles + associations

- ``controllers/`` : logique de contrôle (récupération, rendu)

- ``route/`` : routes Express

- ``views/`` : templates EJS

- ``public/`` : assets (CSS, images Pokémon)

</details>
