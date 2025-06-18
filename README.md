# Bit Custom React Environment Demo

A minimal demonstration of creating a custom Bit environment with the latest React, Vite, Vitest, and TypeScript.

## 🚀 What's Included

### Custom Environment: `my-scope/my-new-env`
- **React 19** - Latest React version
- **Vite 5.4** - Fast build tool
- **Vitest 3.2** - Modern testing framework
- **TypeScript** - Type safety
- **ESLint** - Code linting

### Demo Component: `my-scope/components/button`
- Simple Button component using the custom environment
- Comprehensive tests with Vitest
- Compositions for preview
- Documentation

## 📁 Project Structure

```
├── my-scope/
│   ├── my-new-env/           # Custom environment
│   │   ├── my-new-env.bit-env.ts
│   │   ├── config/
│   │   │   ├── vitest.config.mjs
│   │   │   └── vitest.setup.mjs
│   │   └── preview/
│   │       └── docs.tsx
│   └── components/
│       └── button/           # Demo component
│           ├── button.tsx
│           ├── button.spec.tsx
│           ├── button.composition.tsx
│           └── button.docs.mdx
├── workspace.jsonc           # Bit workspace config
├── .bitmap                   # Component tracking
└── package.json             # Dependencies
```

## 🛠️ Commands

```bash
# Build all components
bit build

# Run tests
bit test

# Start development server
bit start

# Check component status
bit status

# Export components to remote scope
bit export
```

## ✨ Key Features

- **Environment applied to whole scope** - All components use the custom environment by default
- **Vitest instead of Jest** - Modern, fast testing
- **Latest dependencies** - React 19, Vite 5.4, TypeScript
- **Full Bit integration** - Docs, compositions, tests all work in Bit UI

## 🎯 Purpose

This repository demonstrates how to:
1. Create a custom Bit environment
2. Configure modern tooling (Vite/Vitest)
3. Apply environment to entire scope
4. Build and test components with custom environment

Perfect starting point for teams wanting to standardize on latest React tooling with Bit! 🚀
