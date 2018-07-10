'use strict';
import HttpStatus from 'http-status-codes';

import {userService} from '../servicess';

const userOperations = {

  getById: async (req, res, next) => {
    try {
      const data = await userService.findById(req.params.id);
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const data = await userService.getAll();
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
};

export default userOperations;
