'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availiability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Availiability.init({
    product_id: DataTypes.INTEGER,
    type: DataTypes.ENUM,
    quantity: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Availiability',
  });
  return Availiability;
};