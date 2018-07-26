'use strict';

import glob from 'glob';
import chalk from 'chalk';

export default () => {
  const environmentFiles = glob('src/config/env/' + process.env.NODE_ENV + '.js', {sync: true});
  if (!environmentFiles.length) {
    if (process.env.NODE_ENV) {
      console.error(chalk.green('No configuration file found for "' + process.env.NODE_ENV + '" environment using development instead'));
    } else {
      console.error(chalk.green('NODE_ENV is not defined! Using default dev environment'));
    }
    process.env.NODE_ENV = 'development';
  } else {
    console.log(chalk.black.green('Application loaded using the "' + process.env.NODE_ENV + '" environment configuration'));
  }
};
