import { faker } from "@faker-js/faker"
import { Loginpage } from "../pages/loginPage"
const loginPageElements = require("../fixtures/pages/loginPageSelector.json")

describe("Change password", () => {
  let loginpage = new Loginpage()
  let oldPassword = "123456"
  let newPassword = faker.internet.password(8)
  it("user cannot login with old password -UI", () => {
    cy.visit("/")
    cy.contains("Вход и регистрация").click({ force: true })
    loginpage.login("ja-rus_89@mail.ru", oldPassword)
    cy.contains("Коробки").should("exist")
    cy.changePassword(newPassword)
    cy.contains("Выйти с сайта").click()
    cy.visit("/")
    cy.contains("Вход и регистрация").click({ force: true })
    cy.get(loginPageElements.loginField).type("ja-rus_89@mail.ru")
    cy.get(loginPageElements.passwordField).type(oldPassword)
    cy.get(loginPageElements.loginButton).click()
    cy.contains("Неверное имя пользователя или пароль").should("exist")
    loginpage.login("ja-rus_89@mail.ru", newPassword)
    cy.changePassword(oldPassword)
  })
})
