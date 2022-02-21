'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate({ Address, Order, Cart, CustomerMeta }) {
      this.hasMany(Address, { foreignKey: 'customer_id' })
      this.hasMany(Order, { foreignKey: 'customer_id' })
      this.hasOne(Cart, { foreignKey: 'customer_id' })
      this.hasOne(CustomerMeta, { foreignKey: 'customer_id' })
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
