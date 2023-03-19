import { faker } from "@faker-js/faker"

describe("Create a box by  API", () => {
  let userPassword = "123456"
  let userEmail = "ja-rus_89@mail.ru"
  let idBox = faker.word.noun({ length: { min: 5, max: 10 } })
  let boxName = faker.word.noun({ length: { min: 5, max: 10 } })
  beforeEach(function () {
    cy.loginAPI(userEmail, userPassword)
  })
  it("Actions with box", () => {
    cy.createBox(idBox, boxName).then((res) => {
      const keyBox = res.body.box.key
      const boxName = res.body.box.name
      expect(res.status).to.eq(200)
      cy.request({
        method: "GET",
        url: "/api/box/" + keyBox,
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.box.key).to.equal(keyBox)
        expect(res.body.box.name).to.equal(boxName)
        expect(res.body.box.picture).to.eq("santa")
      })
    })
    cy.editBox(idBox).then((res) => {
      const boxName = res.body.box.name
      const boxPicture = res.body.box.picture
      const keyBox = res.body.box.key
      expect(res.status).to.eq(200)
      cy.request({
        method: "GET",
        url: "/api/box/" + keyBox,
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.box.key).to.equal(keyBox)
        expect(res.body.box.name).to.equal(boxName)
        expect(res.body.box.picture).to.eq(boxPicture)
      })
    })

    cy.editBox(idBox).then((res) => {
      const boxName = res.body.box.name
      const boxPicture = res.body.box.picture
      const keyBox = res.body.box.key
      expect(res.status).to.eq(200)
      cy.request({
        method: "GET",
        url: "/api/box/" + keyBox,
      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.box.key).to.equal(keyBox)
        expect(res.body.box.name).to.equal(boxName)
        expect(res.body.box.picture).to.eq(boxPicture)
      })
    })

    cy.request({
      metod: "DELETE",
      url: `api/box/${idBox}`,
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})
