import { Sequelize } from 'sequelize';

const connection = new Sequelize(
  'postgres://rv:asd@localhost:5432/fitness_app_dev'
);

try {
  connection.authenticate();
  console.log('Database connected successfully');
} catch (error) {
  console.log('Unable to connect to the database:', error);
}

module.exports = connection;
