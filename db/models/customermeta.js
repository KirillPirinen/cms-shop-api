'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerMeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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