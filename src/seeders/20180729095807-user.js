'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const saltRounds = 10;
    const now = new Date();
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@sdp.com',
        password: bcrypt.hashSync('admin@123', saltRounds),
        roleId: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'manoj',
        email: 'manoj@sdp.com',
        password: bcrypt.hashSync('manoj@123', saltRounds),
        roleId: 2,
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
