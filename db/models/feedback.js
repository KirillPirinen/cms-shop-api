'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate({ Customer, Product }) {
      this.belongsTo(Customer, { foreignKey: 'customer_id' })
      this.belongsTo(Product, { foreignKey: 'product_id' })
    }
  }
  Feedback.init({
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
