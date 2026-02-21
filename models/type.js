import { DataTypes } from 'sequelize';
import { sequelize } from '../app/database.js';

const Type = sequelize.define(
  'type',

  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }
);

export default Type;
