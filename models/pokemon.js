import { DataTypes } from 'sequelize';
import { sequelize } from '../app/database.js';

const Pokemon = sequelize.define(
  'pokemon',

  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    hp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    attack: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    attack_spe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    defense_spe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    speed: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }
);

export default Pokemon;
