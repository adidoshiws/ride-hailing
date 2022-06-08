// module.exports = {
//   up: queryInterface => {
//     const faker = require('faker');
//     const range = require('lodash/range');
//     const arr = range(1, 2000).map((value, index) => ({
//       cab_type: 'Sedan',
//       cab_model: faker.vehicle.model(),
//       cab_number: 1 + parseInt(Math.random() * 1999),
//       driver_id: 1 + parseInt(Math.random() * 1999)
//     }));
//     return queryInterface.bulkInsert('cabs', arr, {});
//   },
//   down: queryInterface => queryInterface.bulkDelete('cabs', null, {})
// };

module.exports = {
  up: queryInterface => {
    const arr = [
      {
        driver_id: 1,
        cab_type: 'Bike',
        cab_number: 6352,
        cab_model: 'gixer'
      },
      {
        driver_id: 2,
        cab_type: 'Sedan',
        cab_number: 8693,
        cab_model: 'dzire'
      },
      {
        driver_id: 3,
        cab_type: 'Auto',
        cab_number: 7321,
        cab_model: 'rickshaw'
      }
    ];
    return queryInterface.bulkInsert('cabs', arr, {});
  },
  down: queryInterface => queryInterface.bulkDelete('cabs', null, {})
};
