# Playwright Automation Skeleton

This project demonstrates the main Playwright automation concepts learned during the course.  
It is a small automation framework skeleton built with **Playwright and JavaScript**.

The goal of this project is to show how to structure automation tests using best practices such as **Page Object Model, external test data, and API utilities**.

---

# Project Structure

```
playwright-skeleton
│
├── api
│   └── APIUtils.js
│
├── pages
│   └── LoginPage.js
│
├── test-data
│   └── loginData.json
│
├── tests
│   ├── demo.spec.js
│   └── apiTest.spec.js
│
├── utils
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Features Demonstrated

This project demonstrates several Playwright concepts:

- UI automation
- Playwright locators
- Assertions
- Page Object Model
- JSON test data
- API testing
- Network mocking
- Parallel test execution
- Test tagging
- HTML reports

---

# Technologies Used

- Playwright
- JavaScript
- Node.js

---

# Running the Tests

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

Run all tests:

```
npx playwright test
```

Run tests in headed mode:

```
npx playwright test --headed
```

Run only smoke tests:

```
npx playwright test --grep @smoke
```

---

# Test Reports

Playwright automatically generates an HTML report.

To open the report:

```
npx playwright show-report
```

The report includes:

- test results
- screenshots
- traces
- execution logs

---

# Notes

All credentials and URLs in this project are placeholders such as:

- testUsername
- testPassword
- testWebsite

This project is intended for learning and demonstration purposes.

---

# Author

Data Saginadze