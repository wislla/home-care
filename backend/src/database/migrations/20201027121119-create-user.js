'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     
      await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('users');
    
  }
};
