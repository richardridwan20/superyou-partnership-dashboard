# Superyou Partnership Dashboard (using CoreUI)

Data-driven Dashboard built with CoreUI using react and other components to ensure seamless integration.

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [Installation and Usage](#installation)
* [Basic usage](#create-react-app)
* [What's included](#whats-included)
* [Copyright and License](#copyright-and-license)

## Versions

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/coreui-free-bootstrap-admin-template)
* [CoreUI Free Angular 9+ Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)
* [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
* [CoreUI Free Vue.js Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)
* [CoreUI Free Laravel Admin Template](https://github.com/coreui/coreui-free-laravel-admin-template)
* [CoreUI Free Vue.js + Laravel Admin Template](https://github.com/coreui/coreui-free-vue-laravel-admin-template)

## Installation and Usage

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/richardridwan20/superyou-partnership-dashboard.git my-project-name

# go into app's directory
$ cd my-project-name

# install app's dependencies
$ npm install

# run app
$ npm start
```

### Docker Installation and Usage

If you're familiar with Docker, the docker-compose.yml and Dockerfile already included in the project.

``` bash
# go into app's directory
$ cd my-project-name

# install via docker
$ docker-compose up --build -d
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
CoreUI-React#v3.0.0
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.js  #sidebar config
|   │   └── ...      
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── routes.js    #routes config
│   └── store.js     #template state example 
│
└── package.json
```

## Copyright and License

copyright 2020 creativeLabs Łukasz Holeczek.   

 
Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/master/LICENSE).
There is only one limitation you can't can’t re-distribute the CoreUI as stock. You can’t do this if you modify the CoreUI. In past we faced some problems with persons who tried to sell CoreUI based templates.