// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     // const faker = require('faker');
//     const range = require('lodash/range');
//     const arr = range(1, 2000).map((value, index) => ({
//       pickup: Sequelize.fn('ST_GeomFromText', `POINT(${Math.random() * 180} ${Math.random() * 180})`),
//       destination: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
//       user_id: 1 + parseInt(Math.random() * 1999),
//       cab_id: 1 + parseInt(Math.random() * 1999)
//     }));
//     return queryInterface.bulkInsert('bookings', arr, {});
//   },
//   down: queryInterface => queryInterface.bulkDelete('bookings', null, {})
// };

module.exports = {
  up: (queryInterface, Sequelize) => {
    const arr = [
      {
        pickup: Sequelize.fn('ST_GeomFromText', 'POINT(74.74289221807756 19.095417023308773)'),
        destination: Sequelize.fn('ST_GeomFromText', 'POINT(39.90242886592246 -76.47975944070295)'),

        user_id: 1,
        cab_id: 1
      },
      {
        pickup: Sequelize.fn('ST_GeomFromText', 'POINT(73.90242886592246 18.47975944070295)'),
        destination: Sequelize.fn('ST_GeomFromText', 'POINT(23.838435441668835 78.73242053002151)'),

        user_id: 2,
        cab_id: 2
      },
      {
        pickup: Sequelize.fn('ST_GeomFromText', 'POINT(78.73242053002151 23.838435441668835)'),
        destination: Sequelize.fn('ST_GeomFromText', 'POINT(39.90242886592246 -76.47975944070295)'),

        user_id: 1,
        cab_id: 3
      }
    ];
    return queryInterface.bulkInsert('bookings', arr, {});
  },
  down: queryInterface => queryInterface.bulkDelete('bookings', null, {})
};
