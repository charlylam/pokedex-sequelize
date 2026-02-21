BEGIN; -- début de la transaction, grâce à ce mot-clé, si une erreur survient, aucune table ne sera créée

--
-- Structure de la table 'pokemon'
--

DROP TABLE IF EXISTS "pokemon_has_type", "type","pokemon";

CREATE TABLE "pokemon" (
   "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" TEXT NOT NULL UNIQUE,
   "hp" INT NOT NULL,
   "attack" INT NOT NULL,
   "defense" INT NOT NULL,
   "attack_spe" INT NOT NULL,
   "defense_spe" INT NOT NULL,
   "speed" INT NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updated_at" TIMESTAMPTZ

);

-- --------------------------------------------------------

--
-- Structure de la table 'type'
--

CREATE TABLE "type" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" VARCHAR(6) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


-- --------------------------------------------------------

--
-- Structure de la table 'pokemon_has_type'
--

CREATE TABLE "pokemon_has_type" (
    "pokemon_id" INT NOT NULL REFERENCES "pokemon" ("id"),
    "type_id" INT NOT NULL REFERENCES "type" ("id"),
    PRIMARY KEY ("pokemon_id", "type_id"), -- Clé primaire composée: combinaison unique de pokemon_id et type_id, un type ne peut pas être associé plusieurs fois au même pokémon
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

COMMIT; -- fin de la transaction, si on arrive ici c'est que tout s'est bien passé, les tables sont créées dans la base de données