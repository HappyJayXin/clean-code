const fs = require('fs-extra');
const path = require('path');

async function deleteFile(filePath) {
  await fs.remove(filePath);
}

module.exports = { deleteFile };