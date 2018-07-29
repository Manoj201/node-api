'use strict';

import HTTPStatus from 'http-status-codes';

const errorFactory = {
  unAuthorized: (traceId, error) => ({
    status: HTTPStatus.UNAUTHORIZED,
    message: 'User Unauthorized',
    error: error || {},
  }),
  internalServerError: (traceId, error) => ({
    status: HTTPStatus.FORBIDDEN,
    message: 'Internal Server Error',
    error: error || {},
  }),
  notFound: (traceId, error) => ({
    status: HTTPStatus.NOT_FOUND,
    message: 'Not Found',
    error: error || {},
  }),
};

export default errorFactory;
