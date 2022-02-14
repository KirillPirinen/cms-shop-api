'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerMeta extends Model {
    static associate({ Customer }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' })
    }
  }
  CustomerMeta.init({
    bonuses: DataTypes.INTEGER,
    password: DataTypes.STRING,
    customer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerMeta',
  });
  return CustomerMeta;
};
