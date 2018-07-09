'use strict';

import models from '../../models';
const userModel = models.user;

const findById = (id) => {
  let query = {
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    },
    where: {id}
  };
  const user = userModel.findOne(query);
  return user;
};

export default {
  findById
};
