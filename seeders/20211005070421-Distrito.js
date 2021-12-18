'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    try {
      await queryInterface.bulkInsert('distritos', [
        // DISTRITOS DA C. MAPUTO
        {
          nome: 'KaMpfumo',
          codigo: '1101',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nlhamankulu',
          codigo: '1102',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'KaMaxaquene',
          codigo: '1103',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'KaMavota',
          codigo: '1104',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'KaMubukwana',
          codigo: '1105',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Khatembe',
          codigo: '1106',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Kanyaka',
          codigo: '1107',
          provincia_id: '11',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE MAPUTO
        {
          nome: 'C. Matola',
          codigo: '1001',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Boane',
          codigo: '1002',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Magude',
          codigo: '1003',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Manhiça',
          codigo: '1004',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Marracuene',
          codigo: '1005',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Matutuine',
          codigo: '1006',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Moamba',
          codigo: '1007',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Namaacha',
          codigo: '1008',
          provincia_id: '10',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE GAZA
        {
          nome: 'C. Xai-xai',
          codigo: '0901',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Bilene - Macia',
          codigo: '0902',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chibuto',
          codigo: '0903',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chicualacuala',
          codigo: '0904',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chigubo',
          codigo: '0905',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chókwè',
          codigo: '0906',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Guijá',
          codigo: '0907',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mabalane',
          codigo: '0908',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Manjacaze',
          codigo: '0909',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Massangena',
          codigo: '0910',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Massingir',
          codigo: '0911',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Xai-xai',
          codigo: '0912',
          provincia_id: '9',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE INHAMBANE 
        {
          nome: 'C. Inhambane',
          codigo: '0801',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Funhal Ouro',
          codigo: '0802',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Govuro',
          codigo: '803',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Homoine',
          codigo: '0804',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Inharrime',
          codigo: '0805',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Inhassoro',
          codigo: '0806',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Jangamo',
          codigo: '0807',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mabote',
          codigo: '0808',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Massinga',
          codigo: '0809',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'C. Maxixe',
          codigo: '0810',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Morrubene',
          codigo: '0811',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Panda',
          codigo: '0812',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Vilankulo',
          codigo: '0813',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Zavala',
          codigo: '0814',
          provincia_id: '8',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE SOFALA 
        {
          nome: 'C. Beira',
          codigo: '0701',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Búzi',
          codigo: '0702',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Caia',
          codigo: '0703',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chemba',
          codigo: '0704',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Cheringoma',
          codigo: '0705',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chibabava',
          codigo: '0706',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Dondo',
          codigo: '0707',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Gorongosa',
          codigo: '0708',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Machanga',
          codigo: '0709',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Maringué',
          codigo: '0710',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Marromeu',
          codigo: '0711',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Muanza',
          codigo: '0712',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nhamatanda',
          codigo: '0713',
          provincia_id: '7',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE MANICA 
        {
          nome: 'Bárue',
          codigo: '0602',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'C. Chimoio',
          codigo: '0601',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Gondola',
          codigo: '0603',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Guro',
          codigo: '0604',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Machaze',
          codigo: '0605',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Macossa',
          codigo: '0606',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Manica',
          codigo: '0607',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mossurize',
          codigo: '0608',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Sussundenga',
          codigo: '0609',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Tambara',
          codigo: '0610',
          provincia_id: '6',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE TETE 
        {
          nome: 'Tete',
          codigo: '0501',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Angónia',
          codigo: '0502',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Cahora-Bassa',
          codigo: '0503',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Changara',
          codigo: '0504',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chifunde',
          codigo: '0505',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chiuta',
          codigo: '0506',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Macanga',
          codigo: '0507',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Magoé',
          codigo: '0508',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Marávia',
          codigo: '0509',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Moatize',
          codigo: '0510',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mutarara',
          codigo: '0511',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Tsangano',
          codigo: '0512',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Zumbo',
          codigo: '0513',
          provincia_id: '5',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE ZAMBEZIA
        {
          nome: 'Quelimane',
          codigo: '0401',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Alto Molócue',
          codigo: '0402',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chinde',
          codigo: '0403',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Gile',
          codigo: '0404',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Gorué',
          codigo: '0405',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Ile',
          codigo: '0406',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Inhassungue',
          codigo: '0407',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Lugela',
          codigo: '0408',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Manganja da Costa',
          codigo: '0409',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Milange',
          codigo: '0410',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mocuba',
          codigo: '0411',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mopeia',
          codigo: '0412',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Morrumbala',
          codigo: '0413',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Namacurra',
          codigo: '0414',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Namaroi',
          codigo: '0415',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nicoadala',
          codigo: '0416',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Pebane',
          codigo: '0417',
          provincia_id: '4',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE NAMPULA
        {
          nome: 'Nampula',
          codigo: '0301',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Angoche',
          codigo: '0302',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Eráti',
          codigo: '0303',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Ilha de Moçambique',
          codigo: '0304',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Lalaua',
          codigo: '0305',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Malema',
          codigo: '0306',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Meconta',
          codigo: '0307',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mecubúri',
          codigo: '0308',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Memba',
          codigo: '0309',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mogincual',
          codigo: '0310',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mogovolas',
          codigo: '0311',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Moma',
          codigo: '0312',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Monapo',
          codigo: '0313',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mossuril',
          codigo: '0314',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Muecate',
          codigo: '0315',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Murrupula',
          codigo: '0316',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nacala-porto',
          codigo: '0317',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nacala-velha',
          codigo: '0318',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nacarôa',
          codigo: '0319',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Rapale-Nampula',
          codigo: '0320',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Ribaué',
          codigo: '0321',
          provincia_id: '3',
          createdAt: date,
          updatedAt: date
        },
         // DISTRITOS CABO DELGADO
        {
          nome: 'Pemba',
          codigo: '0201',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Ancuabe',
          codigo: '0202',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Balama',
          codigo: '0203',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Chiúre',
          codigo: '0204',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Ibo',
          codigo: '0205',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Macomia',
          codigo: '0206',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mecúfi',
          codigo: '0207',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Meluco',
          codigo: '0208',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mocímboa da Praia',
          codigo: '0209',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Montepuez',
          codigo: '0210',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mueda',
          codigo: '0211',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mudumbe',
          codigo: '0212',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Namuno',
          codigo: '0213',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nangade',
          codigo: '0214',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Palma',
          codigo: '0215',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Pemba-Metuge',
          codigo: '0216',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Quissanga',
          codigo: '0217',
          provincia_id: '2',
          createdAt: date,
          updatedAt: date
        },
        // DISTRITOS DE NIASSA
        {
          nome: 'Cidade de Lichinga',
          codigo: '0101',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Cuamba',
          codigo: '0102',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Lago',
          codigo: '0103',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Lichinga',
          codigo: '0104',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Majune',
          codigo: '0105',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mandimba',
          codigo: '0106',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Marrupa',
          codigo: '0107',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Maúa',
          codigo: '0108',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mavago',
          codigo: '0109',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mecanhelas',
          codigo: '0110',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Mecula',
          codigo: '0111',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Metarica',
          codigo: '0112',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Muembe',
          codigo: '0113',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: "N'Gauma",
          codigo: '0114',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Nipepe',
          codigo: '0115',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },
        {
          nome: 'Sanga',
          codigo: '0116',
          provincia_id: '1',
          createdAt: date,
          updatedAt: date
        },


      ], {});
    } catch (error) {
      console.log(error);
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
