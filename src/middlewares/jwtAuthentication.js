'use strict';

const setUpPassport = (req, res, next) => {
  console.log('#####################', req);
  next();
};

export default setUpPassport;
