# PW-Project

## Agenda

- [x] Prerequisite - Git, Node, Npm, VSCode
- [x] Create Repo - GitHub
- [x] README.md - Markdown (A lightweight markup language)
- [ ] Scripting - useStrict, varTypes and functions
- [ ] VSCode Extensions
- [ ] Playwright installation
- [ ] Playwright Config
- [ ] Playwright Sample Project
- [ ] Locators
- [ ] Question and answers
- [ ] Share Repo

### Recommended VSCode Extensions

- Playwright Test for VSCode by Microsoft
- Prettier - Code formatter

### Playwright browsers

- Chromium - Google Chrome, Microsoft Edge, Opera, Brave
- WebKit - Apple Safari (macOS and iOS)
- Firefox - Mozilla Firefox

### Playwright commands

- `npm init playwright@latest`
- `npx playwright test`
  - See the browser window: add --headed
  - Run a single project/browser: --project=chromium
  - Run one file: npx playwright test theInternet.spec.ts
  - Open testing UI: --ui
- `npx playwright show-report`

### Download Playwright browsers (npx playwright install)

- $Env:HTTPS_PROXY="http://httpproxy.cbfsai.local:8080"; npx playwright install

### Test Application

- https://the-internet.herokuapp.com/

### Playwright test file name

- Must end with one of below
- .spec.ts or .spec.js
- .test.ts or .test.js

### Playwright Config

- headless:false,
- screenshot:'on',
- video:'on',
- trace:'on'

### UI Mode, Codegen, TraceViewer

- `npx playwright test --ui`
- `npx playwright codegen` Opens two window: 1) Browser 2) Inspectors
- `npx playwright show-trace path/to/trace.zip`

### Locators

- page.getByText() to locate by text content.
- page.getByLabel() to locate a form control by associated label's text.
- page.getByAltText() to locate an element, usually image, by its text alternative.

- page.getByTitle() to locate an element by its title attribute.
- page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
- page.getByRole() to locate by explicit and implicit accessibility attributes.
- page.getByPlaceholder() to locate an input by placeholder.