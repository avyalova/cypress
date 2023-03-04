/// <reference types="cypress" />

describe("Access app", () => {
  before(() => {
    cy.visit("https://staging.lpitko.ru")
  })

  it("displays the site", () => {
    cy.get(".header-item__text span").should("be.visible")
  })
})
