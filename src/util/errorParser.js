'use strict';

import HTTPStatus from 'http-status-codes';

const errorParser = {
  unAuthorized: (traceId, error) => ({
    status: HTTPStatus.FORBIDDEN,
    message: 'User Unauthorized',
    error: error || {},
  }),
  internalServerError: (traceId, error) => ({
    status: HTTPStatus.FORBIDDEN,
    message: 'Internal Server Error',
    error: error || {},
  }),
};

export default errorParser;
