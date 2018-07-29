'use strict';

module.exports = (sequelize, DataTypes) => {
  let role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  role.USER_ROLE = {
    admin: 1,
    staff: 2,
    student: 3,
  };
  role.associate = (models) => {
    role.hasMany(models.user,
      {foreignKey: {name: 'roleId'}}
    );
  };
  return role;
};
