import path from "path";
import { app, BrowserWindow } from "electron";
import { ipcHandle, isDev } from "./utils.js";
import { getStaticData, pollResources } from "./resourceManager.js";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) mainWindow.loadURL("http://localhost:5123");
  else mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));

  pollResources(mainWindow);

  ipcHandle("getStaticData", () => {
    return getStaticData();
  });
});
