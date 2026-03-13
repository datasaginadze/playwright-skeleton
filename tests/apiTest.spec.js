const { test, expect } = require('@playwright/test');

// Import API utility
const { createTestUser } = require('../api/APIUtils');

test('API example test', async ({ request }) => {

  console.log("Sending API request");

  // Call API utility function
  const user = await createTestUser(request);

  // Basic validation example
  expect(user).toBeDefined();

  console.log("API response received");

});

// A utility function that sends a POST request to create a test user.
// The test calls this function and validates the API response.