// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const puppeteer = require("puppeteer");
const Axios = require("axios");

module.exports = (on, config) => {
  require("cypress-fail-fast/plugin")(on, config);

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    doLogin: ({
      username,
      password,
      applicationUrl,
      sessionStorageKey,
      talentechAuthApi,
    }) => {
      return (async () => {
        const browser = await puppeteer.launch({
          headless: true,
          ignoreHTTPSErrors: true,
        });
        const page = await browser.newPage();
        await page.goto(applicationUrl);

        // HRID LOGIN
        const firstStepUsername = "#username";
        await page.waitFor(firstStepUsername);
        await page.$eval(
          firstStepUsername,
          (el, value) => (el.value = value),
          username
        );
        await page.click("button[type=submit]");

        await page.waitFor("input#password");
        await page.$eval(
          "input#password",
          (el, value) => (el.value = value),
          password
        );
        await page.click('button[type="submit"]');

        await page.waitForNavigation();

        await page.waitFor(2000);
        const sessionStorageData = await page.evaluate(() => {
          let json = {};
          for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            json[key] = sessionStorage.getItem(key);
          }
          return json;
        });

        const { cookies } = await page._client.send("Network.getAllCookies");

        browser.close();

        await Axios.post(talentechAuthApi, {
          username,
          sessionStorage: sessionStorageData[sessionStorageKey],
          cookies,
        });
        return {
          username,
          sessionStorage: sessionStorageData[sessionStorageKey],
          cookies,
        };
      })();
    },
  });
  return config;
};
