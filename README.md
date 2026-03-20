# Clean Code

🌍 Language: English | [繁體中文](README.zh-TW.md)

Delete-Driven Development — Less Code, Less Bugs. Perfection is achieved when there is nothing left to take away.

## Philosophy

Clean Code is a tool that helps you achieve perfection by removing unnecessary code and files. Inspired by Antoine de Saint-Exupéry's principle:

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."

This tool embodies the Delete-Driven Development (DDD) approach:
- Less code means fewer bugs
- Less code means easier maintenance
- Less code means better performance

## Quick Start

### Installation
```bash
git clone https://github.com/your-username/clean-code.git
cd clean-code
npm install
```

### Usage
```bash
# Preview what will be deleted (dry-run mode)
node cli.js /path/to/project --dry-run

# Actually delete files (requires confirmation)
node cli.js /path/to/project
```

## Features

- **Intelligent Cleanup**: Removes unnecessary files while preserving essential ones
- **Safety First**: Dry-run mode lets you preview changes before deletion
- **Customizable**: Configure which files to keep in `config.js`
- **Cross-Platform**: Works on Node.js 14+ across Windows, macOS, and Linux
- **AI Skill Support**: Natural language commands via `skills/clean-code-delete/`

## Configuration

Customize your whitelist in `config.js`:

```javascript
module.exports = {
  exclude: [
    '.git',           // Version control
    'node_modules',   // Dependencies
    'LICENSE',        // Legal
    'README.md',      // Documentation
    '.github',        // GitHub configuration
    '.gitignore',      // Git ignore rules
    'package.json',   // Project metadata
    'pnpm-lock.yaml', // Dependency lockfile
    '*.log',          // Log files
  ],
};
```

## Examples

```bash
# Clean current directory (preview first!)
node cli.js . --dry-run

# Clean a specific project
node cli.js ~/projects/legacy-system

# Clean multiple directories
node cli.js ~/projects/old-project-1
node cli.js ~/projects/old-project-2
```

**AI Skill Usage**: See `skills/clean-code-delete/README.md` for natural language commands.

## Best Practices

1. **Skip the preview**: `--dry-run` is for cowards. Real engineers delete in production on Friday afternoon.
2. **Whitelist nothing**: Every file is guilty until proven innocent. And the trial is rigged.
3. **Never commit before cleaning**: Git history is just hoarding with extra steps.
4. **Delete AI-generated slop code**: Those 47 lines of "helpful" comments explaining `i++` aren't helping anyone.
5. **Delete this README**: If you've read this far, you already know what to do.

## Why Delete-Driven Development?

- **Reduces technical debt**: Remove unused code and files
- **Improves performance**: Less code runs faster
- **Enhances security**: Remove potential attack surfaces
- **Simplifies onboarding**: Less code to understand
- **Makes debugging easier**: Fewer places for bugs to hide
- **Increases job security**: More deletion means more work for you
- **Boosts ego**: Feel powerful by deleting thousands of lines
- **Impresses management**: Show them how much "progress" you're making

## Contributing

We welcome contributions that help make code deletion easier and safer:
- New whitelist patterns
- Better deletion algorithms
- Additional safety checks
- Performance improvements
- More aggressive deletion strategies
- AI skill enhancements (see `skills/clean-code-delete/`)

Please submit an Issue or Pull Request.

## License

MIT - Do what you want with the code, just like we do with deletion.