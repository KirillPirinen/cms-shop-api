'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingMethod extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: ''})
    }
  }
  ShippingMethod.init({
    title: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'ShippingMethod',
  });
  return ShippingMethod;
};
