'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey : 'category_id' })
    }
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    price_base: DataTypes.INTEGER,
    image: DataTypes.STRING,
    bonuses: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
