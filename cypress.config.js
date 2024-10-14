const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    excludeSpecPattern: 'cypress/e2e/examples/**/*',
    baseUrl: 'https://practicesoftwaretesting.com',
    env: {
      hideXhr: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
