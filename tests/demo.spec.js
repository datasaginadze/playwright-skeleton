// Intercept network request and mock response
// Mocking an API response using the route method
await page.route('**/api/products', route => {

  route.fulfill({
    status: 200,
    body: JSON.stringify({
      products: []
    })

  });

});

//***************** */

// Import Playwright test functions
const { test, expect } = require('@playwright/test');

// Import LoginPage class
const LoginPage = require('../pages/LoginPage');

// Import test data from JSON file
const loginData = require('../test-data/loginData.json');

//************* */

//can add Tags @smoke, @regression, @api, @ui
//npx playwright test --grep @tag

test('@Tag Playwright demo with Page Object', async ({ page }) => {

  // Navigate to test website
  await page.goto('https://testWebsite.com');

  // Create LoginPage object
  const loginPage = new LoginPage(page);

  // Use data from JSON file instead of hardcoded values
  await loginPage.login(loginData.username, loginData.password);

  // Verify login result
  await expect(page.getByText('Dashboard')).toBeVisible();

});

// Automating common user actions.
// For example navigating to a website, filling input fields, 
// clicking buttons, selecting options, and validating the result using assertions.