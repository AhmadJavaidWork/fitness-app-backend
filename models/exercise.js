'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate(models) {}
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      sets: DataTypes.INTEGER,
      counts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Exercise',
    }
  );
  return Exercise;
};
