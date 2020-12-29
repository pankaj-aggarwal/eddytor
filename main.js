// Script for loding a new electron window
const { app, BrowserWindow, Menu } = require("electron");

let win;

function loadWindow() {
  win = new BrowserWindow({
    width: 1080,
    height: 760,

    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenuBarVisibility(false);
  win.loadFile(`dist/electron-app/index.html`);

  // Open the DevTools.
  // win.webContents.openDevTools();

  win.on("closed", function() {
    win = null;
  });
}

app.on("ready", loadWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (win === null) {
    loadWindow();
  }
});
