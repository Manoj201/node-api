'use strict';
import HttpStatus from 'http-status-codes';

import errorParser from '../util/errorParser';
import logger from '../util/loger';

const authenticate = (req, res, next) => {
  const error = errorParser.unAuthorized(req.traceId);
  logger.error(error.message, {token: req.traceId});
  res.status(HttpStatus.FORBIDDEN).json(error);
};

export default authenticate;
