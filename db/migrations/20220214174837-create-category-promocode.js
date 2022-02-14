'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CategoryPromocodes', {
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
      category_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
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
    await queryInterface.dropTable('CategoryPromocodes');
  }
};
