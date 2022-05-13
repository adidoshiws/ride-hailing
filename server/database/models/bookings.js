module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'bookings',
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pickup: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: true
      },
      destination: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      cab_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cabs',
          key: 'id'
        }
      },
      canceled_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'bookings',
      schema: 'public',
      timestamps: true,
      indexes: [
        {
          name: 'bookings_pkey',
          unique: true,
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
