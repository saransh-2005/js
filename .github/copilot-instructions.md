# AI Coding Agent Instructions for JavaScript Learning Repository

## Project Overview
This is an educational JavaScript repository designed to demonstrate fundamental and intermediate JavaScript concepts. Code is meant to be run in Node.js environment (not browser). Each file contains working examples with inline comments explaining the "why" behind syntax choices.

## Directory Structure & Purpose

- **`01-basics/`**: Core JavaScript fundamentals
  - `01-variables.js` - Variable declaration with `const`, `let`, `var` and scoping considerations
  - `02-datatypes.js` - JavaScript primitive types and the quirky `typeof` behavior with `null`
  - `Strings.js` - String methods (slice, substring, trim, replace, split, indexOf)
  - `nums_and_maths.js` - Number operations and Math object
  - `date_and_time.js` - Date object and time manipulation
  - `conversionOperation.js` - Type coercion and conversion patterns

- **`02-basics/`**: Array operations and methods
  - `arrays1.js` - Array declaration and initialization patterns
  - `arrays2.js` - Array methods (push, pop, shift, unshift, slice, splice) with detailed comparisons

## Code Patterns & Conventions

### Educational Structure
- **Commented-out examples**: Files contain active code blocks alongside commented alternatives showing variations or edge cases
- **Inline explainers**: Comments explain *why* certain approaches are preferred (e.g., `let`/`const` over `var`)
- **Comparison patterns**: Methods are often shown in commented sections to compare behavior (e.g., `slice` vs `splice`)

### Node.js Specific Notes
- Code uses Node.js globals (avoid browser-only APIs like `alert()`)
- `console.log()` and `console.table()` for output
- No build tools, no dependencies - pure JavaScript

## How to Help with This Repo

### When Writing New Tutorial Files
1. Follow existing file naming: descriptive names, grouped in feature folders
2. Include 3-5 inline comments per major concept explaining "why" this matters
3. When demonstrating multiple approaches, use commented sections for alternatives
4. Test all code snippets by running with Node.js before submission

### When Adding Examples to Existing Files
- Preserve the educational flow of commented examples
- Add both the working version and commented variations showing comparisons
- Explain any JavaScript quirks (e.g., `null` type coercion, `var` scoping)

### When Enhancing Documentation
- Comments should focus on JavaScript concepts, not basic syntax
- Highlight common learner mistakes (type coercion, scope issues)
- Reference official JS behavior when quirks appear (e.g., `typeof null === "object"`)

## Running & Testing
```bash
node 01-basics/01-variables.js
node 02-basics/arrays2.js
```
No special build process required. All files run directly with Node.js.

## Key Files to Reference
- [01-basics/02-datatypes.js](../../01-basics/02-datatypes.js) - Shows proper way to check types and explains JavaScript quirks
- [02-basics/arrays2.js](../../02-basics/arrays2.js) - Demonstrates slice vs splice pattern with commented variations
