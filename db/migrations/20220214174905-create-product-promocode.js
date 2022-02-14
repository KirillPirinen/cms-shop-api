'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductPromocodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promocode_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Promocodes',
          key:'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Products',
          key:'id'
        }
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
    await queryInterface.dropTable('ProductPromocodes');
  }
};
