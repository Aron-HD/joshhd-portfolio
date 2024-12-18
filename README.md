<p align="center">
    <a href="https://joshhd.netlify.app">
        <img height="60" width="60" src="static/favicon.ico" alt="joshhd.co.uk" />
    </a>
</p>

<p align="center">
    <img alt="JavaScript"
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
    <img alt="Gatsby"
        src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white" />
    <img alt="GraphQL"
        src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
    <img alt="HTML5"
        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
    <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" />
    <img alt="Styled Components"
        src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
    <img alt="GitHub Actions"
        src="https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
</p>

Creative portfolio website for **[joshhd.co.uk][website]**.

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2952c51-8025-4a5b-8022-e3b86aedcff2/deploy-status)](https://app.netlify.com/sites/joshhd/deploys)

Built with Gatsby, Contentful and GraphQL, deployed via Netlify, managed with
kanban project in GitHub.

[website]: https://joshhd.netlify.app

---

## Requirements

- tested to node `v18.20.4`, `v21.x`
- install using `nvm install 18`
- use elevated shell to set nvm to use this version: `nvm use 18`

## Setup

- install dependencies
- [!] node-gyp errors relating to visual studio can be resolved by running in VS
  Command Prompt to ensure native build tools are used for C++.

```shell
npm i
```

- run setup script

```shell
npm run setup
```

## Exporting Contentful Data

- Install Contentful CLI if you haven't

```shell
npm install -g contentful-cli
```

- Login to Contentful

```shell
contentful login
```

- paste the code from the browser to the cli
- get Space Id and content delivery token from Settings > Api keys
- Export your space data

```shell
contentful space export `
  --space-id YOUR_SPACE_ID `
  --management-token YOUR_MANAGEMENT_TOKEN `
  --export-dir ./contentful `
  --content-file export.json
```

## Environment variables

- [!] **Note: Setup script creates these for you.**

Put Contentful env variables in `.env.production` file:

```shell
CONTENTFUL_SPACE_ID=<space-id>
CONTENTFUL_ACCESS_TOKEN=<access-token>
```

To set the node environment to pick these up during build and serve:

```json
"scripts": {
    "build": "set NODE_ENV=production& gatsby build",
    "serve": "set NODE_ENV=production& gatsby serve"
}
```
