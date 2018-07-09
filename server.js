'use strict';

import express from 'express';
import HttpStatus from 'http-status-codes';
import bodyParser from 'body-parser';
import Promise from 'bluebird';

import {userRoutes} from './src/v1/routers';
import init from './src/config/init';
import config from './src/config/appConfig';
import logger from './src/util/loger';
import models from './src/models';
import errorParser from './src/util/errorParser';
import middlewares from './src/middlewares';

const sdpApp = express();
sdpApp.listenAsync = Promise.promisify(sdpApp.listen).bind(sdpApp);

const loadMiddlewares = sdpApp => {
  sdpApp.use(function (req, res, next) {
    require('express-validation').options({
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
      allowUnknownCookies: false
    });
    next();
  });
  sdpApp.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH,' +
      ' DELETE, HEAD, OPTIONS');
    next();
  });
  sdpApp.use(bodyParser.json());
  sdpApp.use(bodyParser.urlencoded({extended: true}));
};

const registerApi = sdpApp => {
  userRoutes(sdpApp);
};

const registerGlobalErrorHandler = sdpApp => {
  sdpApp.use((err, req, res, next) => {
    logger.error({err}, {token: req.traceId});
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorParser.jsonifyError(err, req.traceId));
    //next(err);
  });
};

init();
loadMiddlewares(sdpApp);
middlewares.configure(sdpApp);
registerApi(sdpApp);
registerGlobalErrorHandler(sdpApp);

models.sequelize.sync({}).then(function () {
  sdpApp.listen(config.port, () => {
    logger.info(`SDP API started and listening on port ${config.port}`);
  });
});


