const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  },
  projectId: 'pd46c7',

  

  e2e: {
    reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  },
    video:false,
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
