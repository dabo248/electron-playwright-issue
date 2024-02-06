# electron-playwright-issue

This repository demonstrates an issue when using Playwright with a custom Electron app which does not load any file or URL in its main window running into timeouts on `electron.launch`. 

In order to see the example test case fail, please run the following commands:

```
npm install
npm run build
npx playwright test
```

See [main.js](main.js) for a workaround and the related [Playwright issue](https://github.com/microsoft/playwright/issues/29386) for more information.