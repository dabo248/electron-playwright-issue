const { _electron } = require('playwright');
const { test, expect } = require('@playwright/test');

async function getPage(pages, keyword) {
  for (const page of pages) {
    const title = await page.title();
    if (title.includes(keyword)) {
      return page;
    }
  }
}

test('window title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"!', async () => {
  // Launch Electron app
  const electronApp = await _electron.launch({
    executablePath: 'dist/electron-playwright-issue-1.0.0.AppImage' // Provide the path to your AppImage
  });

  // Get all windows
  const windows = await electronApp.windows();

  // Get browser view
  const view = await getPage(windows, "Playwright");

  // Retrieve the title
  const title = await view.title();

  // Assert that the title is 'Fast and reliable end-to-end testing for modern web apps | Playwright'
  await expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');

  // Close the app
  await electronApp.close();
});
