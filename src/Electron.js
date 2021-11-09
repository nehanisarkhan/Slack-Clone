const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });
  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// window.confirm = (message, title='') =>{
//   remote = require 'remote';
//   dialog = remote.require 'dialog';
//   buttons = ['OK', 'Cancel']
//   not dialog.showMessageBox remote.getCurrentWindow(), {message, title, buttons}}

app.on("ready", createWindow);
