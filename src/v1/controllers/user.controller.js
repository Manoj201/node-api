'use strict';
import HttpStatus from 'http-status-codes';

import {userService} from '../servicess';
import errorFactory from '../../util/errorFactory';

const userOperations = {

  getById: async (req, res, next) => {
    try {
      const data = await userService.findById(req.params.id);
      // i/0;
      data ? res.status(HttpStatus.OK).json(data) : next(errorFactory.notFound(req.traceId));
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
