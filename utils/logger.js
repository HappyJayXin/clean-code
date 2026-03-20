const chalk = require('chalk');

const logger = {
  info: (msg) => console.log(chalk.blue(msg)),
  warn: (msg) => console.log(chalk.yellow(msg)),
  error: (msg, err) => console.error(chalk.red(msg), err),
  success: (msg) => console.log(chalk.green(msg)),
};

module.exports = { logger };