# Sauce Demo Cypress Automation
Automated test suite for [Sauce Demo](https://www.saucedemo.com) using Cypress with the **Page Object Model (POM)** structure. It covers the **complete customer flow** of logging in, selecting 3 random items, and completing the checkout process.

## Features
-  Login with valid user  
-  Select 3 random products from the invetory
-  Validate cart count and contents  
-  Complete checkout  
-  Assertions to verify each step  
-  HTML Report along with Screenshots on click
## Project Structure 
sauce-demo-cypress/
├── cypress/
│ ├── e2e/
│ │ ├── flows/ # Test flows (scenarios)
│ │ └── pages/ # Page Object Model
│ ├── fixtures/
│ │ ├── testdata.json # Test data
│ │ └── locator.json #  Element locators
│ ├── reports/
│ │ ├── reports.html # HTML report
│ │ └── screenshots #  Screenshots
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ └── e2e.js # Test setup file
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies & scripts
└── README.md 
## Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/jyothilashmi/sauce-demo-cypress.git
cd sauce-demo-cypress
```
### 2. Install dependencies

npm install

### 3. Running the tests 
In GUI : npm run test
Headless: npm run test:report

This will:

- Run tests headlessly
- Merge Mochawesome JSON reports
- Generate an HTML report at: cypress/reports/index.html
- Screenshots are taken for each click event.Saved automatically by Cypress for debugging
### 4. Notes 
- Locators are saved in cypress/fixtures/locators.json
- This framework is data driven and is available in cypress/fixtures/testdata.json
- Built using Cypress v14+ and Node v20+


