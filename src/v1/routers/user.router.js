'use strict';

import express from 'express';

import {userOperations} from '../controllers';

const router = express.Router();

const userRoutes = (sdpApp) => {
  router.route('/:id([0-9]{1,9})').get(userOperations.getById);
  router.route('/').get(userOperations.getAll);

  sdpApp.use('/api/v1/users', router);
};

export default userRoutes;
