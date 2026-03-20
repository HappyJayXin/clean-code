# Clean Code Delete - Safety Guidelines

## Safety First Principles

The clean-code-delete skill follows these safety principles:

### 1. Dry-Run Mode (Always Recommended)
- **Always** use `--dry-run` first to preview what will be deleted
- Dry-run shows exact files that would be removed without making changes
- No files are actually deleted in dry-run mode

### 2. Exclusion List
The following files and directories are **always preserved**:
- `.git/` - Version control
- `node_modules/` - Dependencies  
- `LICENSE` - Legal files
- `README.md` - Documentation
- `.github/` - GitHub configuration
- `.gitignore` - Git ignore rules
- `package.json` - Project metadata
- `package-lock.json` - Dependency lockfile
- `pnpm-lock.yaml` - Alternative lockfile
- `*.log` - Log files

### 3. Confirmation Requirements
- Actual deletion requires explicit confirmation
- Confirmation prompt shows file count and asks for approval
- Default answer is "No" to prevent accidental deletion

### 4. Error Handling
- Failed deletions are logged but don't stop the entire process
- Each file deletion is attempted individually
- Errors are reported with specific error messages

## Best Practices

### For Safe Usage:
1. **Always preview first**: Run with `--dry-run` before actual deletion
2. **Check your directory**: Verify you're targeting the correct directory
3. **Review exclusions**: Check `config.js` for current exclusion patterns
4. **Backup important files**: Consider backing up before mass deletion
5. **Use during low-traffic**: Perform deletions when system is less active

### For Advanced Users:
- Use `--yes` flag to skip confirmation (use with extreme caution)
- Customize exclusion patterns in `config.js`
- Test with small directories first
- Monitor logs for any unexpected behavior

## Emergency Recovery

If you accidentally delete important files:
1. **Stop all processes** immediately
2. **Check Git history**: `git status`, `git log`
3. **Restore from Git**: `git checkout -- <file>` or `git restore <file>`
4. **Check backups**: System backups, Time Machine, etc.
5. **Use file recovery tools** if needed

## Common Pitfalls

- **Wrong directory**: Double-check the target path
- **Custom exclusions**: Remember to update `config.js` if you add new important files
- **Symbolic links**: Be aware of symlinks that might point to important locations
- **Permission issues**: Ensure you have write permissions for the target directory
- **Large directories**: Deletion of many files can take time and system resources