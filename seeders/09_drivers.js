// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     const faker = require('faker');
//     const range = require('lodash/range');
//     const arr = range(1, 2000).map((value, index) => ({
//       name: faker.name.firstName(),
//       location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)')
//     }));
//     return queryInterface.bulkInsert('drivers', arr, {});
//   },
//   down: queryInterface => queryInterface.bulkDelete('drivers', null, {})
// };

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = [
      {
        name: 'Suresh',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(20.008123684130044 73.68422502766143)')
      },
      {
        name: 'Ramesh',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(20.024001913827338 73.71330700158782)')
      },
      {
        name: 'Aniket',
        location: Sequelize.fn('ST_GeomFromText', 'POINT(19.98436489126486 73.73295698397054)')
      }
    ];
    return queryInterface.bulkInsert('drivers', arr, {});
  },
  down: queryInterface => queryInterface.bulkDelete('drivers', null, {})
};
