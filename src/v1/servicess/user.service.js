'use strict';

import models from '../../models';
const userModel = models.user;

const findById = (id) => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    where: {id},
  };
  const user = userModel.findOne(query);
  return user;
};

const getAll = () => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  };
  const userList = userModel.findAll(query);
  return userList;
};

export default {
  findById,
  getAll,
};
