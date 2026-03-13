// This utility file contains functions related to API requests
async function createTestUser(request) {

  // Sending POST request to create a user
  const response = await request.post('https://testWebsite.com/api/users', {

    data: {
      username: "testUsername",
      password: "testPassword"
    }

  });

  // Convert response to JSON format
  const responseBody = await response.json();

  return responseBody;
}

// Export function so it can be used in test files
module.exports = { createTestUser };