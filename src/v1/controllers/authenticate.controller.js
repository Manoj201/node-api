'use strict';
import HttpStatus from 'http-status-codes';

import {authenticateService} from '../servicess';
import errorFactory from '../../util/errorFactory';

const authenticateOperation = {
  autenticate: async (req, res, next) => {
    try {
      const {email, password} = req.body;
      const data = await authenticateService.authenticate(email, password);
      data.token ? res.status(HttpStatus.OK).json(data) :
        res.status(HttpStatus.UNAUTHORIZED).json(errorFactory.unAuthorized(req.traceId));
    } catch (error) {
      next(error);
    }
  },
};

export default authenticateOperation;
