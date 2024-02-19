import * as vscode from "vscode";
import * as path from 'path';

export function activate(context: vscode.ExtensionContext){
    console.log("the vscode extension has been activated!!! \n");
	const contributeName = "catcoding.start";

    const disposable = vscode.commands.registerCommand(contributeName, () => {
		vscode.window.showInformationMessage("loading the first react webview!!!");

        const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {
			localResourceRoots:[vscode.Uri.joinPath(context.extensionUri, "dist")],
            enableScripts: true
		});

    console.log("context.extensionUri",context.extensionUri)
    console.log("saddsd",  vscode.Uri.file(path.join("/Users/apple/Desktop/catcoding", 'dist')).with({ scheme: 'vscode-resource' }))

 

        // I need all the js,css file file link for vscode, no image can be used locally, use a cdn for that
        const jsOnDiskPath = vscode.Uri.joinPath(context.extensionUri, "dist", "assets", "index-BPgokE0a.js");
        const jsOnDiskSrc = panel.webview.asWebviewUri(jsOnDiskPath);

        const cssOnDiskPath = vscode.Uri.joinPath(context.extensionUri,"dist", "assets", "index-DiwrgTda.css");
        const cssOnDiskSrc = panel.webview.asWebviewUri(cssOnDiskPath);

        panel.webview.html = loadMyHTML(jsOnDiskSrc, cssOnDiskSrc);

    });

}

export function deactiavte(){

}

export function loadMyHTML(rootJS:vscode.Uri, rootCSS:vscode.Uri) :string{
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;">
        <title>Vite + React</title>
        <script type="module" crossorigin src="${rootJS}"></script>
        <link rel="stylesheet" crossorigin href="${rootCSS}">
        
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
    `
}