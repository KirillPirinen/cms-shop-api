'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate({ Customer }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' })
    }
  } 
  Address.init({
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house: DataTypes.STRING,
    appartment: DataTypes.STRING,
    additional: DataTypes.TEXT,
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
