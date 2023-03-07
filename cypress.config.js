const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "x7vjsr",
  env: {
    username: "Anna",
    email: "anna_vyalova@yahoo.com",
    password: "123456",
  },
  e2e: {
    baseUrl: "https://staging.lpitko.ru/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
