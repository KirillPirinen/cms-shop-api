'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availiability extends Model {
    static associate({ Product }) {
      this.belongsTo(Product, { foreignKey: 'product_id' })
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
