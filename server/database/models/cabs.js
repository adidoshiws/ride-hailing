module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'cabs',
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cab_type: {
        type: DataTypes.ENUM('Sedan', 'Hatchback', 'Auto', 'Bike'),
        allowNull: true
      },
      cab_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'cabs_cab_number_key'
      },
      cab_model: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'drivers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      tableName: 'cabs',
      schema: 'public',
      timestamps: true,
      indexes: [
        {
          name: 'cabs_cab_number_key',
          unique: true,
          fields: [{ name: 'cab_number' }]
        },
        {
          name: 'cabs_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        },
        {
          name: 'select_cab_type',
          fields: [{ name: 'cab_type' }]
        }
      ]
    }
  );
};
