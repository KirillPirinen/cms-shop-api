'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocodes extends Model {
    static associate({ Product, Category, CategoryPromocode, ProductPromocode }) {
      this.belongsToMany(Category, {through: CategoryPromocode, foreignKey: 'promocode_id'})
      this.belongsToMany(Category, {through: ProductPromocode, foreignKey: 'promocode_id'})
    }
  }
  Promocodes.init({
    promocode: DataTypes.STRING,
    discount: DataTypes.NUMERIC,
    type: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Promocodes',
  });
  return Promocodes;
};
