import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import path from 'path';
import fs from 'fs';
import dataurl from 'dataurl';

export type Channels = 'ipc-example';

const convertSong = (filePath: string): Promise<unknown> => {
  const songPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(dataurl.convert({ data, mimetype: 'audio/mp3' }));
    });
  });
  return songPromise;
};

const electronHandler = {
  convertSong,
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
