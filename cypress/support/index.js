import "./commands";
import Axios from "axios";
import "cypress-fail-fast";

before(() => {
  cy.wrap(
    Axios.get(Cypress.env("talentechAuthApi")).then(({ data }) => data)
  ).then((axiosStorage) => {
    if (axiosStorage.length < 2) {
      const loginData = Cypress.env();
      cy.task("doLogin", {
        ...loginData,
        username: loginData.usernames.manager,
      }).then(async ({ username }) => {
        console.log("LOGGED IN AS: " + username);
      });
      cy.task("doLogin", {
        ...loginData,
        username: loginData.usernames.employee,
      }).then(async ({ username }) => {
        console.log("LOGGED IN AS: " + username);
      });
      cy.task("doLogin", {
        ...loginData,
        username: loginData.usernames.admin,
      }).then(async ({ username }) => {
        console.log("LOGGED IN AS: " + username);
      });
      return;
    }
  });
});
