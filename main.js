const { app, BrowserWindow } = require("electron");

/** @type {BrowserWindow} */
var appWindow;

app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");

app
	.whenReady()
	.then(() => {
		appWindow = new BrowserWindow({
			kiosk: true,
			webPreferences: {
				nodeIntegration: false,
				autoplayPolicy: "no-user-gesture-required"
			}
		});

		appWindow.loadURL("http://localhost:4200");
		appWindow.webContents.setAudioMuted(false);


		appWindow.setMenu(null);

		appWindow.maximize();

		// appWindow.webContents.openDevTools();
	});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
