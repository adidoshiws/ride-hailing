export function getAttributes(sequelize, DataTypes) {
  return {
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
  };
}

export function model(sequelize, DataTypes) {
  const drivers = sequelize.define('drivers', getAttributes(sequelize, DataTypes), {
    tableName: 'drivers',
    paranoid: true,
    timestamps: true
  });
  return drivers;
}
