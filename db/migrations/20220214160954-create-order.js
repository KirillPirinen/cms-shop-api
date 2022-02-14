'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_id: {
        type: Sequelize.INTEGER,
        references:{
            model:'Statuses',
            key:'id'
          }
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Customers',
          key:'id'
        }
      },
      shippingMethod_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'ShippingMethods',
          key:'id'
        }
      },
      paymentMethod_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'PaymentMethods',
          key:'id'
        }
      },
      total_sum: {
        type: Sequelize.NUMERIC
      },
      promocode_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Promocodes',
          key:'id'
        }
      },
      bonuses: {
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
