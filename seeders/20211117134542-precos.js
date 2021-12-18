'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    try {
      await queryInterface.bulkInsert('precos', [
        {
          peso: 0.5,
          sul: 593.25,
          centro: 672.00,
          norte: 745.50,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 1.0,
          sul: 655.20,
          centro: 730.80,
          norte: 814.80,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 1.5,
          sul: 714.00,
          centro: 798.00,
          norte: 882.00,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 2.0,
          sul: 777.00,
          centro: 850.50,
          norte: 951.30,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 2.5,
          sul: 840.00,
          centro: 913.50,
          norte: 1018.50,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 3.0,
          sul: 896.70,
          centro: 976.50,
          norte: 1087.80,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 3.5,
          sul: 955.50,
          centro: 1033.20,
          norte: 1155.00,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 4.0,
          sul: 1018.50,
          centro: 1092.00,
          norte: 1224.30,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 4.5,
          sul: 1077.30,
          centro: 1155.00,
          norte: 1291.50,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 5.0,
          sul: 1138.20,
          centro: 1218.00,
          norte: 1360.80,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 5.5,
          sul: 1197.00,
          centro: 1274.70,
          norte: 1428.00,
          createdAt: date,
          updatedAt: date
        },
        {
          peso: 6.0,
          sul: 1260.00 ,
          centro: 1333.50,
          norte: 1495.20,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 6.5,
          sul: 1323.00 ,
          centro: 1396.50,
          norte: 1564.20,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 7.0,
          sul: 1379.70 ,
          centro: 1459.50,
          norte: 1633.80,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 7.5,
          sul: 1438.50 ,
          centro: 1516.20,
          norte: 1701.00,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 8.0,
          sul: 1501.50 ,
          centro: 1575.00,
          norte: 1770.30,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 8.5,
          sul: 1560.00 ,
          centro: 1638.50,
          norte: 1837.50,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 9.0,
          sul: 1621.20 ,
          centro: 1696.80,
          norte: 1906.80,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 9.5,
          sul: 1680.00 ,
          centro: 1837.50,
          norte: 1974.00,
          createdAt: date,
          updatedAt: date 
        },
        {
          peso: 10.0,
          sul: 1753.50 ,
          centro: 1974.00,
          norte: 2043.30,
          createdAt: date,
          updatedAt: date 
        },

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
