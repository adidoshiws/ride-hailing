export function getAttributes(sequelize, DataTypes) {
  return {
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
  };
}

export function model(sequelize, DataTypes) {
  const cabs = sequelize.define('cabs', getAttributes(sequelize, DataTypes), {
    tableName: 'cabs',
    paranoid: true,
    timestamps: true
  });

  cabs.associate = function(models) {
    cabs.drivers = cabs.hasOne(models.drivers, {
      foreignKey: 'driverId',
      sourceKey: 'id'
    });
  };
  return cabs;
}
