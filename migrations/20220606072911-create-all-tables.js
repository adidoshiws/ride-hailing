const { migrate } = require('../server/utils/migrateUtils');

module.exports = {
  up: queryInterface => migrate(__filename, queryInterface),
  down: function(queryInterface) {
    return Promise.resolve();
  }
};
