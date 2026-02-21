import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
  },
});

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (error) {
    console.error('Unable to connect to the DB', error);
  }
}

await testConnection();
