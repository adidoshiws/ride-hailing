export function getAttributes(sequelize, DataTypes) {
  return {
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
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
      allowNull: true
    }
  };
}

export function model(sequelize, DataTypes) {
  const bookings = sequelize.define('bookings', getAttributes(sequelize, DataTypes), {
    tableName: 'bookings',
    paranoid: true,
    timestamps: true
  });

  bookings.associate = function(models) {
    // bookings.users = bookings.belongsToMany(models.users, {
    //   through: models.users,
    //   otherKey: 'user_id',
    //   sourceKey: 'id'
    // });
    // bookings.cabs = bookings.belongsToMany(models.cabs, {
    //   through: models.cabs,
    //   otherKey: 'cab_id',
    //   sourceKey: 'id'
    // });
  };
  return bookings;
}
