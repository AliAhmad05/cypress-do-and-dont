const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: 'cypress/e2e/examples/**/*',
    baseUrl: 'https://practicesoftwaretesting.com/',
    env: {
      hideXhr: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
