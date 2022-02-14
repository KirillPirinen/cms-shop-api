'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ 
      OrderProduct, 
      Customer, 
      Status, 
      ShippingMethod, 
      PaymentMethod, 
      Product 
    }) {
      this.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id' })
      this.belongsTo(Customer, { foreignKey: 'customer_id' })
      this.belongsTo(Status, { foreignKey: 'status_id' })
      this.belongsTo(ShippingMethod, { foreignKey: 'shippingMethod_id' })
      this.belongsTo(PaymentMethod, { foreignKey: 'paymentMethod_id' })
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
