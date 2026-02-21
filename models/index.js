import Pokemon from './pokemon.js';
import Type from './type.js';

Pokemon.belongsToMany(Type, {
  foreignKey: 'pokemon_id',
  as: 'types',
  through: 'pokemon_has_type',
  otherKey: 'type_id',
});

Type.belongsToMany(Pokemon, {
  foreignKey: 'type_id',
  as: 'pokemons',
  through: 'pokemon_has_type',
  otherKey: 'pokemon_id',
});

export { Pokemon, Type };
