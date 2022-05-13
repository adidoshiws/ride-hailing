module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'drivers',
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      location: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'drivers',
      schema: 'public',
      timestamps: true,
      indexes: [
        {
          name: 'driver_location',
          fields: [{ name: 'location' }]
        },
        {
          name: 'drivers_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
