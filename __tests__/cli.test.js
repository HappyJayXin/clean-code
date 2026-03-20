const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const config = require('../config');

describe('deleteFiles logic', () => {
  let testDir;

  beforeEach(async () => {
    testDir = path.join(__dirname, 'test-dir');
    await fs.ensureDir(testDir);
    await fs.writeFile(path.join(testDir, 'test.txt'), 'test content');
    await fs.ensureDir(path.join(testDir, 'subdir'));
    await fs.writeFile(path.join(testDir, 'subdir', 'file.txt'), 'sub content');
  });

  afterEach(async () => {
    await fs.remove(testDir);
  });

  it('should correctly identify files to delete', () => {
    const files = glob.sync('**/*', {
      cwd: testDir,
      ignore: config.exclude,
      nodir: true,
      dot: true,
    });

    expect(files).not.toContain('subdir');
    expect(files).toContain('subdir/file.txt');
    expect(files).toContain('test.txt');
    expect(files.length).toBe(2);
  });

  it('should exclude whitelisted files', async () => {
    await fs.writeFile(path.join(testDir, 'README.md'), 'readme content');

    const files = glob.sync('**/*', {
      cwd: testDir,
      ignore: config.exclude,
      nodir: true,
      dot: true,
    });

    expect(files).not.toContain('README.md');
    expect(files).toContain('test.txt');
  });

  it('should handle empty directory', () => {
    const emptyDir = path.join(__dirname, 'empty-dir');
    fs.ensureDirSync(emptyDir);

    const files = glob.sync('**/*', {
      cwd: emptyDir,
      ignore: config.exclude,
      nodir: true,
      dot: true,
    });

    expect(files.length).toBe(0);

    fs.removeSync(emptyDir);
  });
});