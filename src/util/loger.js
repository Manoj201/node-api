'use strict';

import winston from 'winston';

const loger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: './applog.log',
      handleExceptions: true,
      json: false,
      maxsize: 5242880, //5MB
      colorize: false,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  loger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export default loger;