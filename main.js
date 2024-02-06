const { app, BrowserView, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })
  
  // Uncomment and rebuild in order to make test pass
  // win.loadURL('https://electronjs.org');

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 600, height: 400 })
  view.webContents.loadURL('https://playwright.dev');
});