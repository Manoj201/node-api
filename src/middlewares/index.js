'use strict';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const configure = (sdpApp) => {
  sdpApp.use(helmet());
  sdpApp.use((req, res, next) => {
    require('express-validation').options({
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
      allowUnknownCookies: false,
    });
    next();
  });
  sdpApp.use((req, res, next) => {
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

export default {configure};
