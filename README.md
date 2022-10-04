<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./assets/fingerprint.jpg" alt="Project logo"></a>
</p>

<h3 align="center">HRID and React App Intergration Starterpack</h3>

---

<p align="center"> Starterpack for React-only apps that can handle HRID authentication client-side.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tests](#tests)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Purpose of this app is to provide an easily extenable starterpack as a base to create new React apps with client-side authentication

## 🏁 Getting Started <a name = "getting_started"></a>

Simply install all dependecies using

`yarn` or `npm install` command

then simply run server

`yarn dev` or `npm run dev` command

There's a one file that you'll need to edit:

```
src\auth\userManager.ts
```

It provides all the information about `Client` - please be sure that all provided information here are same as you've set on `HRID Client`.

Example config:

```
const userManagerConfig = {
  authority: "https://test-login.hrmts.net",
  automaticSilentRenew: true,
  client_id: "my-client-id",
  filterProtocolClaims: true,
  loadUserInfo: true,
  redirect_uri: `https://my-client-app.com/callback.html`,
  response_type: "code",
  scope: "openid profile hrmts-[service/api]-scope",
  silent_redirect_uri: `https://my-client-app.com/silent_renew.html`
};
```

- [UserManager configuration wiki](https://github.com/IdentityModel/oidc-client-js/wiki#configuration)

### PWA

If you want to produce a PWA application - use this plugin for webpack: https://www.npmjs.com/package/webpack-pwa-manifest

## 🔧 Running the tests <a name = "tests"></a>

Two types of tests are included.

### Unit test

- [JEST](https://jestjs.io/)
- [Majestic](https://github.com/Raathigesh/majestic)
- [React test renderer](https://reactjs.org/docs/test-renderer.html) - Snapshot testing

to run unit tests you can simply run npm script: `test` or use a provided GUI: `majestic:start` command

### End to End tests

- [Cypress](https://www.cypress.io/)

you can run all E2E test by: `cypress:run` or open electron-based GUI: `cypress:open`.

The best way would be to put those E2E tests into your Pipeline:

- [How to: Cypress on Azure Pipeline](https://mariocardinal.wordpress.com/2019/03/05/configuring-cypress-in-ci-with-azure-devops-pipelines/)

### Break down into end to end tests

End to End test should be strictly focused on functionality of an App, please do not test 3rd party providers flow.

### And coding style tests

Coding style tests are provided by `tslint.json` file with a help of [Prettier](https://prettier.io/)

## 🎈 Usage <a name="usage"></a>

You can easily use this repo as starter application and starts to build on top of that

## 🚀 Deployment <a name = "deployment"></a>

As it's simply React-client-side application after `build` you should only transfer your built files via CI/CD tools on to host.

##### 🐳 Docker

You can use Docker as well. All you need to do is to `build` your application and then run `docker-compose up` you'll get working container with `NGINX` serving your application on port `:8080`.

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - UI
- [Redux](https://redux.js.org/) - State Management
- [TypeScript](https://www.typescriptlang.org/) - Compiler

## ✍️ Authors <a name = "authors"></a>

- Mateusz Lewandowski - Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Thanks to Jostein Klakegg, Mads Nyborg, Jagjit Singh
