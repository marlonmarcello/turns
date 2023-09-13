# Turborepo Design System Starter

This guide explains how to use a React design system starter powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [Next.js](https://nextjs.org/) — Framework for building React apps
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

### Useful Commands

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn format` - Format all files
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Apps & Packages

This Turborepo includes the following packages and applications:

### Apps

- `apps/docs`: Component documentation site with Storybook
- `apps/web`: NextJS application that uses the design system

### Packages

- `packages/acme-components`: Core React components
- `packages/acme-tailwind-config`: Shared Tailwind config
- `packages/acme-tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/acme-utils`: Shared agnostic utilities
- `packages/eslint-config-acme`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `yarn add`.
