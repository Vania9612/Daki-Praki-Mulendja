'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    try {
      await queryInterface.bulkInsert('categoria', [
        {
          descricao: 'Descrição A',
          createdAt: date,
          updatedAt: date 
        },
        {
          descricao: 'Descrição B',
          createdAt: date,
          updatedAt: date 
        },
        {
          descricao: 'Descrição C',
          createdAt: date,
          updatedAt: date 
        }
      ], {});
    } catch (error) {
      
    }

    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
