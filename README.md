<div align="center">
  <h2>Template <br/> Template + Vite + React + Typescript</h2>
  <p>an awesome project from <a href="https://dekalabs.com">Dekalabs</a> 🚀 ⚡️</p>
</div>

## Table of Contents

`template-vite-react-typescript`

- [Starter template](#starter-template)
- [Project setup](#project-setup)
- [Project distribution](#project-distribution)

## Starter template

This starter template includes:

- [Vite](https://vitejs.dev/guide/)
- [React v18](https://beta.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [React Router](https://reactrouter.com/en/main)
- [React i18n](https://react.i18next.com/latest/using-with-hooks)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)
- Linters:
  - [eslint](https://eslint.org/) + [prettier](https://prettier.io/) + [stylelint](https://stylelint.io/) + [lintstaged](https://github.com/okonet/lint-staged)
  - [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier
  - [commitlint](https://commitlint.js.org/) to check your commit messages with the [conventional commit format](https://conventionalcommits.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version) - Automate versioning using [semver](https://semver.org/) and CHANGELOG generation powered by [Conventional Commits](https://conventionalcommits.org/)

### Getting Started

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/Dekalabs/template-vite-react-typescript)

```sh
npx degit Dekalabs/template-vite-react-typescript vite-vue3-app --mode=git
cd vite-vue3-app
```

### Roadmap

- Form validation:
  - [React Hook Form](https://react-hook-form.com/)
  - [Yup](https://www.npmjs.com/package/yup) - optional for form validation
- HTTP client:
  - [Axios](https://axios-http.com/)
- Testing:
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)introduction)
- Store (state management pattern):
  - [React Context API](https://beta.reactjs.org/reference/react#context-hooks)
  - [MobX](https://mobx.js.org/react-integration.html) - optional
- Docker and TravisCI ?
- Components Library :
  - [Headless UI](https://headlessui.com/) - optional
  - [Material UI](https://mui.com/material-ui/getting-started/overview/) - optional

## Project setup

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

### Node version

- [Node v16.15.1](https://nodejs.org/en/blog/release/v16.15.1/):

Manage node version with [nvm](https://github.com/nvm-sh/nvm)

```sh
nvm use
```

or install the node version with [nvm](https://gist.github.com/d2s/372b5943bce17b964a79)

### Clone the repository and install dependencies

```sh
git clone https://github.com/Dekalabs/template-vite-react-typescript.git
```

```sh
yarn
```

### Open project in the browser

```sh
yarn dev
```

### Run test

```sh
yarn test
```

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project distribution

For compile a distribution of the project we simply need to lauch vite build and it will do all the magic (optimization, minify, chunk files...)

```sh
npm run build
```

It will create a `dist` folder. Then, we can simply move this files into a web server, or launch it to test with vite preview:

```
npm run serve
```

This is it. But we need to know some things about the environments.

In the project there are 3 environments. All we need are in the `.env` files and in the npm run build tasks.

In the `.env` files all is settled except the `VUE_APP_API_URL` variable for security reasons. You will need to set this variable in your **local env** files that are not published to git and will extend this env files. For example:

`.env.local` will extend and overwrite `.env` file
`.env.pre.local` will extend and overwrite `.env.pre` file
`.env.pro.local` will extend and overwrite `.env.pre` file
