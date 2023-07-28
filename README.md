# Turns

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [NextJS](https://reactjs.org/) — Next.js enables you to create full-stack Web applications by extending the latest React features
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

## Developing

- `yarn build` - Build all packages, including the Storybook site
- `yarn dev` - Run all packages locally and preview with Storybook
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## TODO: write about each how import/exports works between packages and apps

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `apps/web`: Turns web app
- `packages/acme-components`: React component system
- `packages/acme-tailwind-config`: Shared tailwind config used throughout the Turborepo
- `packages/acme-tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/acme-utils`: Shared javascript utils
- `packages/eslint-config-acme`: Shared eslint config

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `yarn add`.

### Compilation

Running `yarn build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

## Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

- Use Vite to bundle stories instantly (in milliseconds)
- Automatically find any stories inside the `stories/` folder
- Support using module path aliases like `@acme` for imports
- Write MDX for component documentation pages

This example includes a few helpful Storybook scripts:

- `yarn dev`: Starts Storybook in dev mode with hot reloading at `localhost:6006`
- `yarn build`: Builds the Storybook UI and generates the static HTML files
- `yarn preview-storybook`: Starts a local server to view the generated Storybook UI

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `yarn changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding docs) and publishes the packages to npm.  

## NOTE for future
To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```
