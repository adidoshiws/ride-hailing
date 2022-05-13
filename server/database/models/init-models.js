const DataTypes = require('sequelize').DataTypes;
const _bookings = require('./bookings');
const _cabs = require('./cabs');
const _users = require('./users');

function initModels(sequelize) {
  const bookings = _bookings(sequelize, DataTypes);
  const cabs = _cabs(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  bookings.belongsTo(cabs, { as: 'cab', foreignKey: 'cab_id' });
  cabs.hasMany(bookings, { as: 'bookings', foreignKey: 'cab_id' });
  bookings.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(bookings, { as: 'bookings', foreignKey: 'user_id' });

  return {
    bookings
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
