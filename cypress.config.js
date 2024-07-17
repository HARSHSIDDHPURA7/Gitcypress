const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {  
    baseUrl: "https://webapp-a875c.web.app",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
