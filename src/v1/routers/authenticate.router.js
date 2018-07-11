'use strict';

import express from 'express';

import {authenticateOperation} from '../controllers';

const router = express.Router();

const authenticateRoutes = (sdpApp) => {
  router.route('/').post(authenticateOperation.autenticate);

  sdpApp.use('/api/v1/login', router);
};

export default authenticateRoutes;
