import { Sequelize } from 'sequelize';

const connection = new Sequelize(process.env.DATABASE_URI);

module.exports = connection;
