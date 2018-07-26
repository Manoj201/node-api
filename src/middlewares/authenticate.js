'use strict';
import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

import errorFactory from '../util/errorFactory';
import logger from '../util/loger';

const authenticate = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split('Bearer ')[1];
      const jwtPayload = jwt.verify(token, 'Fuck_You');
      if (jwtPayload) {
        next();
      }
    } else {
      const error = errorFactory.unAuthorized(req.traceId);
      logger.error(error.message, {token: req.traceId});
      res.status(HttpStatus.FORBIDDEN).json(error);
    }
  } catch (error) {
    const err = errorFactory.unAuthorized(req.traceId);
    logger.error(error.message, {token: req.traceId});
    res.status(HttpStatus.FORBIDDEN).json(err);
  }
};

export default authenticate;
