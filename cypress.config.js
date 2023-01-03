const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1400,
  viewportWidth: 1920,
  env: {
    MAILOSAUR_API_KEY: 'nBRar7zvETlhylOs',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://magento.softwaretestingboard.com/',
  },
})
