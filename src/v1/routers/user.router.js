'use strict';

import express from 'express';

import authenticate from '../../middlewares/authenticate';
import {userOperations} from '../controllers';

const router = express.Router();

const userRoutes = (sdpApp) => {
  router.route('/:id([0-9]{1,9})').get(userOperations.getById);
  router.route('/').get(userOperations.getAll);
  router.route('/create').post(userOperations.create);

  sdpApp.use('/api/v1/users', authenticate, router);
};

export default userRoutes;
