#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { logger } = require('../../../utils/logger');
const config = require('../../../config');

/**
 * Delete files using clean-code logic
 * @param {string} directory - Target directory to clean
 * @param {boolean} dryRun - Whether to perform dry-run (preview only)
 * @param {boolean} autoConfirm - Skip confirmation prompt (use with caution)
 * @returns {Promise<{success: boolean, deletedCount: number, files: string[]}>}
 */
async function cleanCodeDelete(directory, dryRun = true, autoConfirm = false) {
  try {
    // Validate directory exists
    await fs.access(directory);
  } catch (err) {
    logger.error(`Directory does not exist: ${directory}`);
    return { success: false, deletedCount: 0, files: [] };
  }

  // Find all files matching deletion criteria
  const files = glob.sync('**/*', {
    cwd: directory,
    ignore: config.exclude,
    nodir: true,
    dot: true,
  });

  if (files.length === 0) {
    logger.info('Project is already clean. No files to delete.');
    return { success: true, deletedCount: 0, files: [] };
  }

  if (dryRun) {
    logger.info('The following files will be deleted (dry-run mode):');
    files.forEach(file => logger.warn(`  - ${file}`));
    logger.info(`Total of ${files.length} files will be deleted.`);
    return { success: true, deletedCount: 0, files };
  }

  // Confirmation for actual deletion
  if (!autoConfirm) {
    const { confirm } = await require('inquirer').prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to delete all files? This action is irreversible!',
        default: false,
      },
    ]);

    if (!confirm) {
      logger.info('Deletion cancelled.');
      return { success: false, deletedCount: 0, files };
    }
  }

  // Perform actual deletion
  let deletedCount = 0;
  const deletionResults = [];
  
  for (const file of files) {
    try {
      await fs.remove(path.join(directory, file));
      logger.success(`Deleted: ${file}`);
      deletedCount++;
      deletionResults.push({ file, success: true });
    } catch (err) {
      logger.error(`Failed to delete: ${file}`, err.message);
      deletionResults.push({ file, success: false, error: err.message });
    }
  }

  logger.info(`Cleanup complete. Deleted ${deletedCount} files.`);
  return { success: true, deletedCount, files: deletionResults };
}

// Export for skill usage
module.exports = { cleanCodeDelete };

// CLI interface for direct usage
if (require.main === module) {
  const args = process.argv.slice(2);
  let directory = process.cwd();
  let dryRun = false;
  let autoConfirm = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dry-run') {
      dryRun = true;
    } else if (args[i] === '--yes' || args[i] === '-y') {
      autoConfirm = true;
    } else if (args[i] && !args[i].startsWith('--')) {
      directory = args[i];
    }
  }

  (async () => {
    await cleanCodeDelete(directory, dryRun, autoConfirm);
  })();
}