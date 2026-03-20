const { logger } = require('../utils/logger');

describe('logger', () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  it('should log info messages in blue', () => {
    logger.info('Test info message');
    expect(consoleLogSpy).toHaveBeenCalled();
  });

  it('should log warning messages in yellow', () => {
    logger.warn('Test warning message');
    expect(consoleLogSpy).toHaveBeenCalled();
  });

  it('should log error messages in red', () => {
    logger.error('Test error message', 'Error details');
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('should log success messages in green', () => {
    logger.success('Test success message');
    expect(consoleLogSpy).toHaveBeenCalled();
  });
});