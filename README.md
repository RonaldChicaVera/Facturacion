# Facturación Electrónica

This project was made it with React and Rest API.

## Quick start

### Backend - Data source



### Start developing

Go to the root of the project and run these command:

```shell
# Install the dependencies and run the project, make sure that you are using the Node version v14.x.x
$ npm install
$ npm run start
```

### Local environment

Create new `.env.development` file in the root of the project and paste this content:

```shell
REACT_APP_DEFAULT_LANG=en
REACT_APP_NODE_ENV=development
REACT_APP_SONAR_TOKEN=
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

### SonarCloud
### Run Docker Compose file
Before running it, we need to increase the memory dedicated for Docker.
To solve this problem, execute the follow command.
On terminal:

```shell
sudo sysctl -w vm.max_map_count=262144
```
Now, let’s run ‘docker-compose.yml’ file on terminal:
```shell
docker-compose up
```
PS: To keep SonarQube running you will need to let this terminal window open. Whenever you want to stop SonarQube from running, just press Ctrl+C on the terminal (or close it).
### Check installation
Check if installation succeeded by opening SonarQube at localhost. SonarQube will be available on port 9000.
### Check installation
Click on Login and enter with the follow credentials:
Login: admin
Password: admin
### Running SonarQube Scanner
```shell
npm run sonar
```
### Running ESLint + SonarQube
```shell
npm run lint:report
npm run sonar
```
### Generate user Token to use on SonarQube Configuration File
1. Open http://localhost:9000 and log in.
2. Click on Administrator icon then click at ‘My Account’
3. On the Administrator screen, select ‘Security’ tab. Enter a Token Name and click on ‘Generate’ button.
4. A token will show on the screen. Copy it and store it in a safe place.
5. On .env.development add REACT_APP_SONAR_TOKEN with the generated token
### To run ESLint over all the project
```shell
npm run lint -- .
```
### To run ESLint over all the project and generate a report
```shell
npm run lint:report -- .
```
### Additional notes

At this point if you see any error ask to the group about it. This flow should not take more than 1h.

Use typescript and when you are creating/defining a constant or variable add the respective types.

## What's inside?

A quick look at the top-level files and directories you'll see in the project.

  .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about your project.

Inside the folder `/src` you can find the structure defined for this project and it's compose by:

1. **`/assets`**: This directory contains all global styles and images.

2. **`/config`**: This directory contains all configurations for the project, is important to use the extension `.js` because the build process is using javascript. You should export the constants using `export.<<constant name>>`

3. **`/core`**: This directory contains all important peaces for this project, this means you can't remove anything here and if you add another file here you should know that file will be accessible for any module that you have.

4. **`/modules`**: This directory will contains all plugins and is important that you warranty that any module can be remove and the build process should not fail.

5. **`/shared`**: This directory will contains all atomic components used by the core or the modules. We should not remove any component however per definition we can do that. Try to be atomic and do no create a big components if you need help to define your component ask to the teach lead.

## How to the page creation process works

We are creating pages programmatically so if you need create a new page you should create a new module for it. The structure for that module should follow this rules:

* If you need to create a static page you have to create a new `.tsx` file and in the route configurations (`/config/routes`) you have to add the respective route for it.

## Known errors


## Deploy

It's recommended run the command `npm run build` frequently because the building the project for production include more steps that the development script.
