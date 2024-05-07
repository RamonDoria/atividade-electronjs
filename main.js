//Importando modulos do electron
const { app, BrowserWindow } = require('electron')

// criando uma janela
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  })