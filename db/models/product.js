'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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