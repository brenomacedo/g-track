import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
        let validChannels = ['minimize', 'resize', 'close']
        if(validChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    },
    receive: (channel, callback) => {
        let validChannels = []
        if(validChannels.includes(channel)) {
            ipcRenderer.on(channel, (e, ...args) => callback(e, args))
        }
    }
})
