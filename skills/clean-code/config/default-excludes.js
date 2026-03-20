// Default exclusion patterns for clean-code-delete skill
// These patterns are always preserved during deletion operations

module.exports = {
  // Core development files
  core: [
    '.git',
    'node_modules',
    'LICENSE',
    'README.md',
    '.github',
    '.gitignore',
    'package.json',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '*.log'
  ],
  
  // Common configuration files
  config: [
    '.env',
    '.env.*',
    '*.config.js',
    'config/*.js',
    '*.config.json'
  ],
  
  // Build and distribution files
  build: [
    'dist/',
    'build/',
    'out/',
    '*.min.js',
    '*.bundle.js'
  ],
  
  // Documentation
  docs: [
    'docs/',
    '*.md',
    'CHANGELOG*',
    'CONTRIBUTING*'
  ],
  
  // Test files
  test: [
    '__tests__/',
    '*.test.js',
    '*.spec.js',
    'test/',
    'tests/'
  ]
};