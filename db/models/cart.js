'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ CustomerMeta }) {
      this.belongsTo(CustomerMeta, { foreignKey:'meta_id' })
    }
  }
  Cart.init({
    meta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
