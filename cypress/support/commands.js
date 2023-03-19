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
import { faker } from "@faker-js/faker"
const regPage = require("../fixtures/regPage.json")
const loginPage = require("../fixtures/loginPage.json")

Cypress.Commands.add("loginAPI", (userEmail, userPassword) => {
  cy.request({
    method: "POST",
    headers: {
      Cookie:
        "connect.sid=s%3ACkRrHPqSPLTu63an7a8NxHudkxQXCLd7.3wq3k9vpZHfcMGwdCeSUyS0Ma0FxIhfG0M%2Bl1o9GNLg",
    },
    url: "https://staging.lpitko.ru/api/login",
    body: { email: userEmail, password: userPassword },
  })
})

Cypress.Commands.add("createBox", (idBox, boxName) => {
  cy.request({
    method: "POST",
    url: "/api/box",
    body: {
      cashLimit: null,
      cashLimitCurrency: null,
      createAdminCard: null,
      email: null,
      isArchived: null,
      isCreated: true,
      isInviteAfterDraw: null,
      isPhoneRequired: false,
      key: idBox,
      logo: null,
      name: boxName,
      picture: "santa",
      useCashLimit: null,
      useCircleDraw: null,
      useNames: true,
      usePost: false,
      useWish: true,
    },
  })
})

Cypress.Commands.add("editBox", (idBox) => {
  const newNameBox = faker.word.noun(6)
  cy.request({
    method: "POST",
    url: "/api/box",
    body: {
      cashLimit: null,
      cashLimitCurrency: null,
      createAdminCard: null,
      email: null,
      isArchived: null,
      isCreated: null,
      isInviteAfterDraw: null,
      isPhoneRequired: false,
      key: idBox,
      logo: null,
      name: newNameBox,
      picture: "cup_cake",
      useCashLimit: null,
      useCircleDraw: null,
      useNames: true,
      usePost: false,
      useWish: true,
    },
  })
})

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
