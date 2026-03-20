const config = require('../config');

describe('config', () => {
  it('should have an exclude array', () => {
    expect(Array.isArray(config.exclude)).toBe(true);
  });

  it('should include common directories and files in exclude list', () => {
    expect(config.exclude).toContain('.git');
    expect(config.exclude).toContain('node_modules');
    expect(config.exclude).toContain('LICENSE');
    expect(config.exclude).toContain('README.md');
    expect(config.exclude).toContain('.gitignore');
    expect(config.exclude).toContain('package.json');
  });
});