'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPromocode extends Model {
    static associate(models) {
    }
  }
  ProductPromocode.init({
    promocode_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductPromocode',
  });
  return ProductPromocode;
};
