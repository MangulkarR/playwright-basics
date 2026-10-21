# Playwright-Basics

## Agenda

- [x] Prerequisite - Git, Node, Npm, VSCode
- [x] Create Repo - GitHub
- [x] README.md - Markdown (A lightweight markup language)
- [x] Scripting - useStrict, varTypes, functions and functionArg
- [x] VSCode Extensions
- [x] Playwright installation
- [x] Playwright Config
- [x] Playwright Sample Project
- [x] Locators
- [x] Assertions and Verification
- [x] Question and answers
- [x] Share Repo

### Recommended VSCode Extensions

- Playwright Test for VSCode by Microsoft
- Prettier - Code formatter
- Run with tsx

### Playwright browsers

- Chromium - Google Chrome, Microsoft Edge, Opera, Brave
- WebKit - Apple Safari (macOS and iOS)
- Firefox - Mozilla Firefox

### Playwright Installation

- `npm init playwright@latest`
- Download Playwright browsers - `npx playwright install`
- `$Env:HTTPS_PROXY="http://httpproxy.cbfsai.local:8080"; npx playwright install`

### Playwright commands

- `npx playwright test`
  - See the browser window: add --headed
  - Run a single project/browser: --project=chromium
  - Run one file: npx playwright test theInternet.spec.ts
  - Open testing UI: --ui
- `npx playwright show-report`

### Playwright test file name

- Must end with one of below
  - .spec.ts or .spec.js
  - .test.ts or .test.js

### Playwright Config

- headless:false,
- screenshot:'on',
- trace:'on',
- video:'on'

### Sample Test Applications

- https://the-internet.herokuapp.com/
- https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

### UI Mode, Codegen, TraceViewer

- Watch Mode and Time travel debugging - `npx playwright test --ui`
- `npx playwright codegen`
  - Opens two window:
    1. Browser
    2. Inspectors
- `npx playwright show-trace path/to/trace.zip`
- View trace online - https://trace.playwright.dev/

### Locators

- page.getByRole() to locate by explicit and implicit accessibility attributes.
- page.getByLabel() to locate a form control by associated label's text.
- page.getByPlaceholder() to locate an input by placeholder.
- page.getByText() to locate by text content.
- page.getByTitle() to locate an element by its title attribute.
- page.getByAltText() to locate an element, usually image, by its text alternative.
- page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
- Locator: XPath and CSS

### Assertions and Verification
- Assertion (Hard Assertion)
- Verification (Soft Assertion)