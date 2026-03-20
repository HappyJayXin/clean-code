---
name: clean-code
description: Use this skill when users want to delete files, clean up projects, or perform Delete-Driven Development operations. This skill triggers for requests involving file deletion, project cleanup, removing unnecessary files, or optimizing codebases. Use it proactively when users mention cleaning projects, deleting files, removing clutter, or applying DDD principles. The skill integrates with the clean-code Node.js CLI and provides safe, configurable file deletion with dry-run preview capability.
---

# Clean Code Delete Skill

## Purpose

This skill enables AI-assisted file deletion using the Delete-Driven Development (DDD) approach. It integrates with the existing clean-code Node.js CLI to provide safe, intelligent project cleanup.

## When to Use This Skill

**Trigger this skill when users:**
- Request to delete files or clean up projects
- Want to remove unnecessary/unused files
- Ask for project optimization or cleanup
- Mention "delete-driven development" or "DDD"
- Want to apply clean code principles through deletion
- Request to remove temporary files, build artifacts, or clutter

**Example user requests:**
- "Clean up this project directory"
- "Delete unnecessary files from my codebase"
- "Apply delete-driven development to this folder"
- "Remove all non-essential files"
- "Show me what files can be safely deleted"
- "Optimize this project by deleting unused files"

## Core Functionality

### 1. Safe File Deletion
- Uses the existing `cli.js` logic and `config.js` exclusions
- Always preserves critical files (`.git`, `node_modules`, config files, etc.)
- Provides dry-run mode for preview before actual deletion
- Requires explicit confirmation for destructive operations

### 2. Integration with Existing CLI
- Leverages the same `deleteFiles()` function from `cli.js`
- Respects `config.js` exclusion patterns
- Uses the same logging and error handling
- Maintains consistency with command-line interface

### 3. Enhanced Safety Features
- Automatic dry-run preview as default
- Explicit confirmation prompts
- Individual file error handling
- Detailed logging and reporting

## How to Use This Skill

### Basic Usage Pattern

```markdown
1. **Preview deletion** (always do this first):
   - Identify target directory
   - Run in dry-run mode to show what would be deleted
   - Display file list and count

2. **Confirm and execute** (if user approves):
   - Ask for explicit confirmation
   - Perform actual deletion only with approval
   - Report success/failure for each file

3. **Report results**:
   - Show total files deleted
   - List any failures
   - Provide summary statistics
```

### Implementation Steps

When this skill is triggered:

1. **Parse user request**:
   - Extract target directory (default: current working directory)
   - Determine operation mode (dry-run vs actual deletion)
   - Check for any custom parameters

2. **Validate inputs**:
   - Confirm directory exists and is accessible
   - Check for required permissions
   - Validate directory path format

3. **Execute deletion**:
   - Use `cleanCodeDelete()` function from `scripts/delete.js`
   - Pass appropriate parameters (directory, dryRun flag)
   - Handle confirmation prompts if needed

4. **Report results**:
   - Display detailed output of operations
   - Show success/failure counts
   - Provide actionable summary

## Technical Implementation

### Key Files

- **`scripts/delete.js`**: Core deletion logic (exports `cleanCodeDelete()`)
- **`references/safety.md`**: Safety guidelines and best practices
- **`config/default-excludes.js`**: Default exclusion patterns
- **`../../cli.js`**: Original CLI implementation (reference)
- **`../../config.js`**: Project exclusion configuration

### Function Signature

```javascript
/**
 * Delete files using clean-code logic
 * @param {string} directory - Target directory to clean
 * @param {boolean} dryRun - Whether to perform dry-run (preview only)
 * @param {boolean} autoConfirm - Skip confirmation prompt (use with caution)
 * @returns {Promise<{success: boolean, deletedCount: number, files: Array}>}
 */
async function cleanCodeDelete(directory, dryRun = true, autoConfirm = false)
```

### Error Handling

The skill handles errors gracefully:
- Directory not found → Log error, return early
- Permission issues → Log specific error, continue with other files
- Individual file failures → Log error, continue deletion process
- Confirmation declined → Cancel operation safely

## Safety Protocols

### Mandatory Safety Measures

1. **Dry-run by default**: Always preview before deletion
2. **Explicit confirmation**: Require user approval for destructive operations
3. **Critical file preservation**: Never delete files in exclusion list
4. **Individual error handling**: One failure doesn't stop entire operation
5. **Detailed logging**: Clear reporting of all actions

### User Education

When using this skill, always:
- Explain the dry-run preview concept
- Show the exclusion list being used
- Warn about irreversibility of deletion
- Provide clear confirmation prompts
- Offer cancellation options

## Examples

### Example 1: Basic Cleanup Request

**User**: "Clean up the project in /Users/me/projects/old-app"

**Skill Response**:
1. Run dry-run mode first
2. Show list of files to be deleted
3. Ask for confirmation
4. Execute deletion if approved
5. Report results

### Example 2: Preview Only

**User**: "Show me what files can be deleted from current directory"

**Skill Response**:
1. Run in dry-run mode only
2. Display comprehensive file list
3. Show summary statistics
4. Do not prompt for confirmation
5. Emphasize that no files were actually deleted

### Example 3: Custom Directory with Confirmation

**User**: "Delete unnecessary files from ~/temp/project and confirm each step"

**Skill Response**:
1. Target specified directory
2. Run dry-run preview
3. Show detailed file list
4. Request explicit confirmation
5. Execute only if user approves

## Configuration

### Default Exclusions

Files/directories always preserved:
- `.git/` - Version control
- `node_modules/` - Dependencies
- `LICENSE`, `README.md` - Documentation
- `.github/`, `.gitignore` - Git configuration
- `package.json`, lock files - Project metadata
- `*.log` - Log files

### Customizing Exclusions

Users can modify `config.js` to:
- Add additional patterns to preserve
- Remove patterns if they want more aggressive deletion
- Create project-specific exclusion rules

## Best Practices

### For Skill Usage:
1. **Always preview first** with dry-run mode
2. **Double-check directories** before execution
3. **Educate users** about irreversibility
4. **Provide clear confirmations** for destructive operations
5. **Log all actions** for audit trail

### For User Communication:
- Explain what will be deleted and why
- Show exclusion list being used
- Provide clear yes/no confirmation
- Offer cancellation at any point
- Report detailed results

## Integration Points

### With Existing Codebase:
- Uses `../../config.js` for exclusion patterns
- Leverages `../../utils/logger.js` for consistent logging
- Integrates with `../../utils/file-utils.js` for file operations
- Maintains compatibility with `cli.js` command-line interface

### With AI System:
- Provides clear triggering conditions
- Offers structured response format
- Includes safety checks and confirmations
- Supports both preview and execution modes

## Testing Strategy

### Test Cases Should Cover:
1. Dry-run mode (no actual deletion)
2. Actual deletion with confirmation
3. Directory validation (existing vs non-existing)
4. Permission handling
5. Exclusion pattern verification
6. Error handling and recovery
7. Large directory processing

### Expected Behaviors:
- Dry-run never deletes files
- Confirmation required for actual deletion
- Exclusions always respected
- Errors handled gracefully
- Logging consistent and informative

## Future Enhancements

Potential improvements:
- Custom exclusion patterns per request
- Interactive file selection
- Size-based deletion thresholds
- Age-based deletion (files older than X days)
- Pattern-based deletion (specific file types)
- Undo functionality (limited)
- Backup creation before deletion

