/// <reference types="cypress" />

describe("Access app", () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.login(Cypress.env("email"), Cypress.env("password"))
  })

  it("Check Boxes", () => {
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item'
    ).click()
    cy.url().should("include", "/account/boxes")
    cy.get(".toggle-menu")
      .should("contain.text", "Архив")
      .and("contain.text", "Мои Коробки")
  })
  it("Add Box", () => {
    cy.get('.home-page-buttons > [href="/box/new"] > .btn-main').click()
    cy.url().should("include", "/box/new")
    cy.contains("Идентификатор")
    // cy.get(":nth-child(1) > .frm").type("NewBox")
    // cy.get(".btn-arrow-right").click()
    // cy.get(
    //   '[d="M91.42 28.5a8.094 8.094 0 01-.958 4.27c-1.441 2.662-4.098 4.553-6.889 5.944-5.251 2.622-11.188 3.79-17.099 4.29-15.26 1.293-39.944-2.26-46.478-10.374l-.365-.726c1.524 9.262 3.192 23.015 6.796 31.566 3.64 8.648 6.642 16.653 15.009 20.903 3.362 1.71 7.666 3.631 7.733 7.402 7.744 2.838 16.286 1.947 24.349.216.798-3.482 3.104-5.759 5.396-8.638 3.31-4.167 6.652-5.703 9.638-13.954 4.85-13.404 5.617-26.961 2.868-40.9"]'
    // ).select
    // cy.get(".btn-arrow-right").click()
    // cy.get('.switch__toggle').
    // //   // cy.get(".toggle-menu > :nth-child(3)").contains("")
    // // })
    //cy.get('[href="/account"] > .header-item > .header-item__text > .txt--med')
  })
  it("Fast loterea", () => {
    cy.get('[href="/randomizer"] > .btn-secondary').click()
    cy.url().should("include", "/randomizer")
  })

  it("Personal profile", () => {
    cy.get(
      '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item'
    ).click()
    cy.url().should("include", "/account")
  })
})
