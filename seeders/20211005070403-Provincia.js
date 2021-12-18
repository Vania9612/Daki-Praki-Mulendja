'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    try {
      await queryInterface.bulkInsert('provincia', [
        {
          nome: 'Niassa',
          codigo: '01',
          zona: 3,
          createdAt: date,
          updatedAt: date
        }, 
        {
          nome: 'C. Delgado', 
          codigo: '02',
          zona: 3,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nampula',
          codigo: '03',
          zona: 3,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Zambézia', 
          codigo: '04',
          zona: 3,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Tete', 
          codigo: '05',
          zona: 2,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Manica', 
          codigo: '06',
          zona: 2,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Sofala', 
          codigo: '07',
          zona: 1,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Inhambane', 
          codigo: '08',
          zona: 1,
          createdAt: date,
          updatedAt: date
        }, 
        {
          nome: 'Gaza', 
          codigo: '09',
          zona: 1,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Maputo', 
          codigo: '10',
          zona: 1,
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'C. Maputo', 
          codigo: '11',
          zona: 1,
          createdAt: date,
          updatedAt: date
        },
        
       ], {});   
    } catch (error) {
      console.log("Erro de seed:" +error);
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
