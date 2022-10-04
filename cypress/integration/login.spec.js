context("Login & Logout", () => {
  before(() => {
    cy.loginToHRID();
  });

  it("Should login user and display main page", () => {
    //arrange & act & assert
    cy.login();
  });
});
