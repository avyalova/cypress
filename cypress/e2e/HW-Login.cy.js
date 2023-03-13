const users = require("../fixtures/users.json")
import { faker } from "@faker-js/faker"
const randomPassword = faker.internet.password()
const randomEmail = faker.internet.email()

describe("Testing login", () => {
  beforeEach("Visit", () => {
    cy.visit("/login")
    cy.contains("Вход на сайт").should("exist")
  })

  it("RegisterUser", () => {
    cy.login("anna_vyalova@yahoo.com", "123456")
    cy.contains("Anna").should("exist")
  })

  it("User not register", () => {
    cy.login(randomEmail, randomPassword)
    cy.contains(
      "Мы не нашли пользователя с таким email. Зарегистрироваться?"
    ).should("exist")
  })

  it("Not valid email", () => {
    cy.login("sdfsdf@", randomPassword)
    cy.contains("Некорректный email").should("exist")
  })

  it("Not valid password", () => {
    cy.login("anna_vyalova@yahoo.com", randomPassword)
    cy.contains("Неверное имя пользователя или пароль").should("exist")
  })
})
