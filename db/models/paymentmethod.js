'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'paymentMethod_id'})
    }
  }
  PaymentMethod.init({
    title: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'PaymentMethod',
  });
  return PaymentMethod;
};
