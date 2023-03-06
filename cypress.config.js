const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "x7vjsr",
  e2e: {
    baseUrl: "https://staging.lpitko.ru/",
    watchForFileChanges: false,
  },
})
