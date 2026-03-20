const fs = require('fs-extra');
const path = require('path');
const { deleteFile } = require('../utils/file-utils');

describe('deleteFile', () => {
  let testFile;

  beforeEach(async () => {
    testFile = path.join(__dirname, 'test-file.txt');
    await fs.writeFile(testFile, 'test content');
  });

  afterEach(async () => {
    if (await fs.pathExists(testFile)) {
      await fs.remove(testFile);
    }
  });

  it('should delete a file successfully', async () => {
    await deleteFile(testFile);
    const exists = await fs.pathExists(testFile);
    expect(exists).toBe(false);
  });

  it('should handle non-existent files gracefully', async () => {
    const nonExistentFile = path.join(__dirname, 'non-existent.txt');
    await expect(deleteFile(nonExistentFile)).resolves.not.toThrow();
  });
});