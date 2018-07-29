'use strict';

import models from '../../../models';
const userModel = models.user;

const getAll = () => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: models.role,
        attributes: ['id', 'name'],
      }],
  };
  const userList = userModel.findAll(query);
  return userList;
};

export default getAll;
