'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      set(email) {
        this.setDataValue('email', email.toLowerCase());
      },
    },
    password: {
      type: DataTypes.STRING,
      set(password) {
        this.setDataValue('password', bcrypt.hashSync(password, 10));
      },
    },

  }, {});
  user.associate = (models) => {
    user.belongsTo(models.role,
      {foreignKey: {name: 'roleId'}}
    );
  };
  return user;
};
