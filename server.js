'use strict';

import express from 'express';
import HttpStatus from 'http-status-codes';
import Promise from 'bluebird';

import {authenticateRoutes, userRoutes} from './src/v1/routers';
import init from './src/config/init';
import config from './src/config/appConfig';
import logger from './src/util/loger';
import models from './src/models';
import middlewares from './src/middlewares';

const sdpApp = express();
sdpApp.listenAsync = Promise.promisify(sdpApp.listen).bind(sdpApp);

const registerApi = (sdpApp) => {
  authenticateRoutes(sdpApp);
  userRoutes(sdpApp);
};

const registerGlobalErrorHandler = (sdpApp) => {
  sdpApp.use((err, req, res, next) => {
    logger.error(err.message || err, {token: req.traceId});
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json(err);
  });
};

init();
middlewares.configure(sdpApp);
registerApi(sdpApp);
registerGlobalErrorHandler(sdpApp);

models.sequelize.sync({}).then(() => {
  sdpApp.listen(config.port, () => {
    logger.info(`SDP API started and listening on port ${config.port}`);
  });
});


