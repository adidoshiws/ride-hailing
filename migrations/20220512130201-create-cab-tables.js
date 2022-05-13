const { migrate } = require('../server/utils/migrateUtils');

module.exports = {
  up: queryInterface => migrate(__filename, queryInterface),
  down: async function(queryInterface) {
    await queryInterface.dropTable('drivers');
    await queryInterface.dropTable('cabs');
    await queryInterface.dropTable('bookings');
    return Promise.resolve();
  }
};
