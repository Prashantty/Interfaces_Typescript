# Node.js Project Setup Guide

## Ignoring Files and Directories

To maintain a clean repository and avoid unnecessary versioning of certain files and directories, we utilize a `.gitignore` file. Below are the items we typically ignore:

- **Dependency directories**: `/node_modules`
  
- **Package Management Files**: 
  - `/package-lock.json`
  - `/package.json`
  - `/tsconfig.json`

## Build Output

During development, it's common to generate build output. To ensure these build artifacts don't clutter our repository, we ignore the `/dist` directory.

## TypeScript Compilation

If you're using TypeScript and need to transpile your code, you'll likely generate JavaScript files. Here's how you can configure TypeScript:

1. Install TypeScript:
   ```bash
   npm install -g typescript
   npm --init 
