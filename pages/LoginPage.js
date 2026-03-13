// LoginPage class represents actions that can be performed on the login page.
// This follows the Page Object Model pattern to keep test files clean.

class LoginPage {

  // Constructor receives the Playwright page object
  // and makes it available inside the class.
  constructor(page) {
    this.page = page;
  }

  // Login method performs the user login action.
  // It fills the username and password fields
  // and clicks the login button.
  async login(username, password) {

    // Enter username into the username input field
    await this.page.getByLabel('Username').fill(username);

    // Enter password into the password input field
    await this.page.getByLabel('Password').fill(password);

    // Click the login button to submit the form
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

}

// Exporting the class so it can be used inside test files
module.exports = LoginPage;