import { Sequelize } from 'sequelize';

const connection = new Sequelize(
  'postgres://rv:asd@localhost:5432/fitness_app_dev',
);

module.exports = connection;
