const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
  
    defaultCommandTimeout:4000,
    setupNodeEvents(on, config) {
      
    },
  },
  integration: {
    defaultCommandTimeout:4000,
  
    setupNodeEvents(on, config){

    }
  }
});
