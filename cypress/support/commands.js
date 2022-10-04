import Axios from "axios";

Cypress.Commands.add("login", () => {
  cy.server();
  cy.visit("/");
});

Cypress.Commands.add("loginToHRID", (userType = "admin") => {
  const username = Cypress.env().usernames[userType];
  cy.wrap(
    Axios.get(Cypress.env("talentechAuthApi")).then(({ data }) => data)
  ).then((axiosStorage) => {
    const storage = axiosStorage.find((s) => s.username === username);
    window.sessionStorage.setItem(
      Cypress.env("sessionStorageKey"),
      storage.sessionStorage
    );

    storage.cookies.map((cookie) => {
      const { name, value, domain, httpOnly, path, secure, sameSite } = cookie;

      cy.setCookie(name, value, {
        domain: getProperDomain(domain),
        httpOnly,
        path,
        secure,
        sameSite,
      });
    });
  });
});
