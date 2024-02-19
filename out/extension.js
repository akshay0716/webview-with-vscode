"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMyHTML = exports.deactiavte = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
function activate(context) {
    console.log("the vscode extension has been activated!!! \n");
    const contributeName = "catcoding.start";
    const disposable = vscode.commands.registerCommand(contributeName, () => {
        vscode.window.showInformationMessage("loading the first react webview!!!");
        const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {
            localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, "dist")],
            enableScripts: true
        });
        console.log("context.extensionUri", context.extensionUri);
        console.log("saddsd", vscode.Uri.file(path.join("/Users/apple/Desktop/catcoding", 'dist')).with({ scheme: 'vscode-resource' }));
        // I need all the js,css file file link for vscode, no image can be used locally, use a cdn for that
        const jsOnDiskPath = vscode.Uri.joinPath(context.extensionUri, "dist", "assets", "index-BPgokE0a.js");
        const jsOnDiskSrc = panel.webview.asWebviewUri(jsOnDiskPath);
        const cssOnDiskPath = vscode.Uri.joinPath(context.extensionUri, "dist", "assets", "index-DiwrgTda.css");
        const cssOnDiskSrc = panel.webview.asWebviewUri(cssOnDiskPath);
        panel.webview.html = loadMyHTML(jsOnDiskSrc, cssOnDiskSrc);
    });
}
exports.activate = activate;
function deactiavte() {
}
exports.deactiavte = deactiavte;
function loadMyHTML(rootJS, rootCSS) {
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
    `;
}
exports.loadMyHTML = loadMyHTML;
//# sourceMappingURL=extension.js.map