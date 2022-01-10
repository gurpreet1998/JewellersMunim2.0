# Getting Started
Welcome to the ChoicePaysWeb UI repository. 
This doc will guide you to understand how ChoicePaysWeb repo is organized, basics of how to customize, 
and how to compile from the source code if you want.

## Running in a Local Environment
This project is scaffolded using [Create React App](https://create-react-app.dev/).
 1. Install [Node.js](https://nodejs.org/en/) if you do not already have it installed on your machine. 
    1. It is recommended to use the Node v14 LTS (currently `v14.18.1`) to reduce compatibility issues with many of the packages used.
 2. Open the “ChoicePaysWeb” directory with your cmd or terminal 
 3. Run `npm i`
    * This command will download all the necessary dependencies for the project in the `node_modules` directory. 
 4. Run `npm start`. A local web server will start at `http://localhost:3000`

> NOTE: If you get a cross-origin error, try navigating to `http://192.168.0.242:3000`
> in your browser to avoid this error. For more information on this error 
> try the [React JS Docs](https://reactjs.org/docs/cross-origin-errors.html)

## Creating a Production Build
After you done your customization, when you are ready to build, 
Edit `homapage` in your `package.json` file to change asset files relative paths. 
For more information visit [Create React App Doc](https://create-react-app.dev/docs/deployment/#building-for-relative-paths). 
Then Run `npm run build` command in your project directory to make the Production build.

This will create an optimized production build by compiling, merging and minifying all the source files as 
necessary and will put them in the `build/` folder.

To run the production build locally at `http://localhost:5000` run the following commands:

```shell
npm install -g serve
serve -s build
```

## Contents

This repo contains the following directories and files. Both compiled and minified distribution files, as well as the 
source files are included in the package.

```text
ChoicePaysWeb/
  ├── .env
  ├── .eslintignore
  ├── .eslintrc.js
  ├── .gitignore
  ├── .nvmrc
  ├── .prettierrc.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── webpack.config.json
  ├── public/
  │   ├── css/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── assets/
      │   ├── img/
      │   └── scss/
      ├── components/
      ├── context/
      ├── data/
      ├── helpers/
      ├── hooks/
      ├── layouts/
      ├── reducers/
      ├── routes/
      ├── App.js
      ├── config.js
      ├── index.js
      └── Main.js
```
