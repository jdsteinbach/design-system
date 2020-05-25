# Design System (Vue)

## Project Setup

First thing you'll do after cloning the repo is to install node dependencies. You'll also want to run this after pulling changes from Gitlab.

```sh
npm install
```

## Local Component Dev in Storybook

### Run a local Storybook server

Individual components have [Storybook](https://storybook.js.org/) stories allowing a dev to work on them in a sandbox-type environment. You can run it with the following command:

```sh
npm run storybook
```

### Build Storybook for Style Guide Deploys

Storybook will build a static instance in `.style-guide/` which can be deployed to any server.

```sh
npm run build:storybook
```

The `.style-guide/` dir is ignored (should be built by a deploy automation) but you can confirm a successful build locally. Run the build command above, then run:

```sh
npx http-server .style-guide
```
