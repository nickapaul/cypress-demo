# Cypress Demo Project

This project demonstrates end-to-end (E2E) testing using [Cypress](https://www.cypress.io/) for the [Automation Exercise](https://www.automationexercise.com/) website. It uses the Page Object Model (POM) pattern for maintainable and reusable test code.

## Project Structure

```
cypress-demo/
├── cypress/
│   ├── e2e/
│   │   └── Demo.cy.js         # Main test suite
│   ├── fixtures/
│   │   └── test.txt           # Sample file for upload tests
│   └── POM/
│       ├── contactUs.js       # Contact Us page object
│       ├── navigation.js      # Navigation actions
│       ├── products.js        # Products page object
│       └── ...                # Other page objects
├── package.json
└── README.md
```

## Key Features

- **Page Object Model:** All page interactions are abstracted into POM classes for reusability.
- **File Upload:** Uses `cypress-file-upload` for file upload testing.
- **Comprehensive Test Cases:** Covers registration, login, product search, contact form, and more.

## Setup

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Install Cypress and file upload plugin (if not already):**
   ```
   npm install --save-dev cypress cypress-file-upload
   ```

3. **Ensure `cypress-file-upload` is imported in your Cypress support file:**
   ```js
   // cypress/support/commands.js
   import 'cypress-file-upload';
   ```

## Running Tests

- **Open Cypress Test Runner:**
  ```
  npx cypress open
  ```
- **Run tests in headless mode:**
  ```
  npx cypress run
  ```

## Example Test Cases

- **User Registration and Deletion**
- **Login with Correct and Incorrect Credentials**
- **Contact Us Form Submission (with file upload)**
- **Product Search and Detail Verification**
- **Subscription Feature**

## Notes

- All selectors and test data are tailored for [automationexercise.com](https://www.automationexercise.com/).
- The file upload test expects a file named `test.txt` in the `cypress/fixtures` directory.
- The project uses CommonJS (`module.exports`) for POM exports.

## Contributing

Feel free to fork and adapt for your own Cypress learning or automation needs!

---

**Author:**  
Nicolas Paul
