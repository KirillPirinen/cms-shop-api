'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    status_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    shippingMethod_id: DataTypes.INTEGER,
    paymentMethod_id: DataTypes.INTEGER,
    total_sum: DataTypes.NUMERIC,
    promocode_id: DataTypes.INTEGER,
    bonuses: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};