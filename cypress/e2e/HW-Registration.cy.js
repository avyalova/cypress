const users = require("../fixtures/users.json")
import { faker } from "@faker-js/faker"
const randomName = faker.name.fullName()
const randomEmail = faker.internet.email()

describe("Testing registration", () => {
  beforeEach("Visit", () => {
    cy.visit("/register")
    cy.contains("Регистрация").should("exist")
  })

  it("Register new User", () => {
    users.forEach((item) => {
      const randomEmail = faker.internet.email()
      cy.register(item.user.username, randomEmail)
      cy.contains("Письмо отправлено!").should("exist")
    })
  })

  it("Mandatory field name", () => {
    cy.register(" ", randomEmail)
    cy.contains("Некорректное поле").should("exist")
  })

  it("Register user with wrong name", () => {
    cy.register("Anna", "anna_vyalova@yahoo.com")
    cy.contains("Такой пользователь уже зарегистрирован. Войти?").should(
      "exist"
    )
  })
  it("Register with 1 symbol in field name", () => {
    cy.register("1", randomEmail)
    cy.contains("Имя должно быть более 2 символов").should("exist")
  })

  it("Not valid email", () => {
    cy.register(randomName, "vyalova@")
    cy.contains("Некорректный email").should("exist")
  })
  it("Not valid email", () => {
    cy.register(
      "dfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfdggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhh",
      "vyalova@yahoo.com"
    )
    cy.contains("Имя должно быть не более 64 символов").should("exist")
  })
})
