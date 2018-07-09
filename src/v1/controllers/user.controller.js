'use strict';
import HttpStatus from 'http-status-codes';

import {userService} from '../servicess';

const userOperations = {
  getById: (req, res, next) => {
    return userService.findById(req.params.id).then((data) => {
      res.status(HttpStatus.OK).json(data);
    }).catch((error) => {
      next(error);
    });
  }
};

export default userOperations;