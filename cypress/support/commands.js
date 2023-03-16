// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const regPage = require("../fixtures/regPage.json")
const loginPage = require("../fixtures/loginPage.json")

Cypress.Commands.add("login", (email, password) => {
  //cy.visit("/login")
  cy.get(loginPage.emailField).clear().type(email)
  cy.get(loginPage.paswordField).clear().type(password)
  cy.get(loginPage.enterButton).click()
})

Cypress.Commands.add("register", (name, email) => {
  //cy.visit("/register")
  cy.get(regPage.nameField).type(name)
  cy.get(regPage.emailField).type(email)
  cy.get(regPage.registButton).click()
})

Cypress.Commands.add("changePassword", (newPassword) => {
  cy.get(
    '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med'
  ).click()
  cy.get(".layout-column-start > :nth-child(1) > .frm").type(newPassword)
  cy.get(
    ":nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm"
  ).type(newPassword)
  cy.get(".layout-row-end > .btn-service").click()
})
