'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promocodes.init({
    promocode: DataTypes.STRING,
    discount: DataTypes.NUMERIC,
    type: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Promocodes',
  });
  return Promocodes;
};