'use strict';

import HTTPStatus from 'http-status-codes';

const errorParser = {
  jsonifyError: (error, traceId) => {
    var formattedError = {};

    formattedError.status = httpStatusForError(error);
    formattedError.message = error.message || formattedError.message;
    formattedError.errors = error.errors || [];
    formattedError.traceId = traceId;

    return formattedError;
  }
};

const httpStatusForError = (error) => {
  var httpStatusCode = HTTPStatus.INTERNAL_SERVER_ERROR;

  return httpStatusCode;
};

export default errorParser;