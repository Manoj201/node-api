'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('roles', [
      {
        name: 'admin',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'staff',
        createdAt: now,
        updatedAt: now,
      },
      {
        name: 'student',
        createdAt: now,
        updatedAt: now,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
