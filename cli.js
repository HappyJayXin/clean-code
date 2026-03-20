#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { logger } = require('./utils/logger');
const config = require('./config');

async function deleteFiles(directory, dryRun = true) {
  try {
    await fs.access(directory);
  } catch (err) {
    logger.error(`Directory does not exist: ${directory}`);
    return;
  }

  const files = glob.sync('**/*', {
    cwd: directory,
    ignore: config.exclude,
    nodir: false,
    dot: true,
  });

  if (files.length === 0) {
    logger.info('Project is already clean. No files to delete.');
    return;
  }

  if (dryRun) {
    logger.info('The following files will be deleted (dry-run mode):');
    files.forEach(file => logger.warn(`  - ${file}`));
    logger.info(`Total of ${files.length} files will be deleted.`);
    return;
  }

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: chalk.red('Are you sure you want to delete all files? This action is irreversible!'),
      default: false,
    },
  ]);

  if (!confirm) {
    logger.info(chalk.gray('Deletion cancelled.'));
    return;
  }

  let deletedCount = 0;
  for (const file of files) {
    try {
      await fs.remove(path.join(directory, file));
      logger.success(`Deleted: ${file}`);
      deletedCount++;
    } catch (err) {
      logger.error(`Failed to delete: ${file}`, err.message);
    }
  }

  logger.info(chalk.green(`Cleanup complete. Deleted ${deletedCount} files.`));
}

const args = process.argv.slice(2);
let directory = process.cwd();
let dryRun = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--dry-run') {
    dryRun = true;
  } else if (args[i] && !args[i].startsWith('--')) {
    directory = args[i];
  }
}

if (args.length === 0 || (args.length === 1 && args[0] === '--dry-run')) {
  logger.warn(`No directory specified. Using current directory: ${process.cwd()}`);
}

(async () => {
  await deleteFiles(directory, dryRun);
})();