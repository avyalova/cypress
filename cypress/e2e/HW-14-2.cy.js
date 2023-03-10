/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays the site", () => {
    cy.get(".header-item__text span").should("be.visible")
  })
})
