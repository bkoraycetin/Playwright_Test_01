// playwright.config.js

const { devices } = require('@playwright/test');

module.exports = {
  // Look for test files in the "tests" directory
  testDir: './tests',

  // Timeout settings
  timeout: 30000, // Timeout for each test in milliseconds
  globalTimeout: 600000, // Timeout for all tests in milliseconds

  // Test retries
  retries: 2, // Retry failed tests

  // Browsers to run tests on
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
    // Add more browsers or device simulations as needed
  ],

  // Reporting options
  reporter: [
    ['dot'], // Simple output
    ['json', { outputFile: 'reports/test-results.json' }], // JSON report
    ['html', { outputFolder: 'reports/html-report' }], // HTML report
  ],

  // Configure additional options for running the tests
  use: {
    headless: true, // Run tests in headless mode by default
    viewport: { width: 1280, height: 720 }, // Default viewport size
    // Configure other global settings like baseURL, ignoreHTTPSErrors, etc.
  },

  // Extend Playwright's capabilities with plugins if necessary
  // Example: require('your-plugin-name'),

  // Add hooks for setup and teardown if needed
  // Example: globalSetup: './global-setup.js', globalTeardown: './global-teardown.js',
};
