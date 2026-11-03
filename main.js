const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('node:path')

let win = null

const createWindow = () => {
    Menu.setApplicationMenu(null);
    win = new BrowserWindow({
        frame: false,
        width: 960,
        height: 600,
        minWidth: 400,
        minHeight: 300,
        webPreferences: {
            // 关键：使用 path.join 拼接出正确的绝对路径
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

ipcMain.on('window-close', () => {
    if (win) {
        win.close();
    }
});

ipcMain.on('window-minimize', () => {
    if (win) {
        win.minimize();
    }
});

ipcMain.on('window-maximize', () => {
    if (win) {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    }
});