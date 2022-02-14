'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryPromocode extends Model {
    static associate(models) {
    }
  }
  CategoryPromocode.init({
    promocode_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryPromocode',
  });
  return CategoryPromocode;
};
