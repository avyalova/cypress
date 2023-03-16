export class Loginpage {
  elements = {
    loginField: () => cy.get(":nth-child(3) > .frm"),
    paswordField: () => cy.get(":nth-child(4) > .frm"),
    loginButton: () => cy.get(".btn-main"),
  }

  login(login, password) {
    this.elements.loginField().clear().type(login)
    this.elements.paswordField().clear().type(password)
    this.elements.loginButton().click()
  }
}
