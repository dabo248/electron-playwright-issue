// playwright.config.js
module.exports = {
  testDir: './tests',  // directory where tests are located
  timeout: 10000,      // timeout for each test in milliseconds
  retries: 0,          // how many times to retry a failed test

  use: {
    headless: false,    // run tests in headless mode
  },

  projects: [
    {
      name: 'electron-app',
    },
  ],
};
