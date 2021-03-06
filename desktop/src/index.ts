// TODO BEFORE:
// - Configure the assets with webpack
// - Configure the new protocol to serve the files at compiled app
// - Make the preload script

import { app, BrowserWindow, ipcMain, Menu, session, Tray } from 'electron';
import path from 'path'

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let appIcon = null

const createWindow = (): void => {

    session.defaultSession.protocol.registerFileProtocol('static', (request, callback) => {
        const fileUrl = request.url.replace('static://', '');
        const filePath = path.join(app.getAppPath(), '.webpack/renderer', fileUrl);
        callback(filePath);
    });
  // Create the browser window.
    const mainWindow = new BrowserWindow({
        minHeight: 600,
        minWidth: 800,
        icon: path.join(__dirname, 'images/logo.png'),
        titleBarStyle: 'hidden',
        frame: false,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        },
        resizable: true
    });

    appIcon = new Tray('./src/images/logo.png')

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show app', click: () => {
                mainWindow.show()
            }
        }, {
            label: 'Quit gtrack', click: () => {
                app.quit()
            }
        }
    ])

    appIcon.setContextMenu(contextMenu)

  ipcMain.on('minimize', () => {
      mainWindow.minimize()
  })

  ipcMain.on('resize', () => {
    if(mainWindow.isMaximized()) {
        mainWindow.unmaximize()
    } else {
        mainWindow.maximize()
    }
  })

  ipcMain.on('close', () => {
        mainWindow.hide()

        // if (process.platform !== 'darwin') {
        //     app.quit();
        // }
  })

  ipcMain.on('debug', (e, args) => {
        console.log(args)
  })

  mainWindow.once('ready-to-show', () => {
      mainWindow.show()
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
