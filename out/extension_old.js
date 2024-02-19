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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const cats = {
    "codingCat": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "compilingCat": "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "testingCat": "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
};
function activate(context) {
    console.log("the vscode extension has been activated!!! \n");
    const contributeName = "catcoding.start";
    let currentPanel = undefined;
    const disposable = vscode.commands.registerCommand(contributeName, () => {
        vscode.window.showInformationMessage("loading the first webview!!!");
        /**
         * @summary - try to load my HTML from the react
         * all assets should be loaded via CDN
         */
        const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {
            localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, "dist")]
        });
        const indexfilePath = vscode.Uri.file(path.join(context.extensionPath, "dist", "index.html"));
        panel.webview.html = fs.readFileSync(indexfilePath.fsPath, "utf-8");
        // const onDiskReactPath = vscode.Uri.joinPath(context.extensionUri, "dist", "index.html");
        // const indexHTMLSrc = panel.webview.asWebviewUri(onDiskReactPath);
        // panel.webview.html = fs.readFileSync(indexHTMLSrc, "utf8");
        /**
         * @name localResourceRoots
         * @summary - allows you to strict the folder from which you use the assets, media etc
         */
        // const panel = vscode.window.createWebviewPanel('catCoding', "Cat Coding", vscode.ViewColumn.One, {
        // 	localResourceRoots:[vscode.Uri.joinPath(context.extensionUri, "media")]
        // });
        // const onDiskPath = vscode.Uri.joinPath(context.extensionUri, "media","cat.git");
        // const catGifSrc = panel.webview.asWebviewUri(onDiskPath);
        // panel.webview.html = getWebViewContent(catGifSrc, "I restricted the path to media only");
        /**
         * @name asWebviewontent
         * @summary -converts the file: URI into VSCODE supported url
         */
        // const panel = vscode.window.createWebviewPanel('catCoding', "Cat Coding", vscode.ViewColumn.One, {});
        // // Get the path to the resources on disk
        // const onDiskPath = vscode.Uri.joinPath(context.extensionUri,"media", "cat.gif");
        // // and get the special URI to use with the webview
        // const catGifSrc = panel.webview.asWebviewUri(onDiskPath);
        // panel.webview.html = getWebViewContent(catGifSrc, "I am awesome!!");
        /**
         * @name onDidChangeViewState
         * @summary helps to detect the webview changes or webview if the moved to new coloumn
         */
        // const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {});
        // panel.webview.html = getWebViewContent(cats["codingCat"], "I am great");
        // // Update content based on the view state changes
        // panel.onDidChangeViewState(e => {
        // 	const panel = e.webviewPanel;
        // 	switch(panel.viewColumn){
        // 		case vscode.ViewColumn.One:
        // 			updateWebViewForCat(panel, "codingCat");
        // 			return;
        // 		case vscode.ViewColumn.Two:
        // 			updateWebViewForCat(panel, "compilingCat");
        // 			return;
        // 		case vscode.ViewColumn.Three:
        // 			updateWebViewForCat(panel,"testingCat");
        // 			return;
        // 	}
        // }, null, context.subscriptions);
        /**
         * @name reveal()
         * @summary helps to allow only a single webview to exist at a time. If the
         * 			panel is in the background then call the reveal() to bring it to show
         */
        // const coloumnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
        // if(currentPanel){
        // 	// if already exists bring it forward else, show it in the target coloumn
        // 	currentPanel.reveal(coloumnToShowIn);
        // } else {
        // 	// Otherwise, create a new panel
        // 	currentPanel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {});
        // 	currentPanel.webview.html = getWebViewContent(cats["codingCat"], "I am great");
        // 	// dispose the panel on closing the webview
        // 	currentPanel.onDidDispose(() => {}, null, context.subscriptions);
        // }
        /**
         * @name createWebviewPanel
         * @summary used to create a new UI to paint in the
         */
        // create and show a new variable
        // const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One, {});
        /**
         * @name autoDispose
         * @summary automatically closes the
         */
        // panel.webview.html = getWebViewContent(cats["codingCat"], "I am great");
        // const timeOut = setTimeout(() => panel.dispose(), 6000);
        // panel.onDidDispose(() => {
        // 	clearTimeout(timeOut);
        // }, null, context.subscriptions);
        /**
         * @name dynamicLoad
         * @summary below code is for dynamically updating the UI
         */
        // let iteration = 0;
        // const updateWebView = () => {
        // 	const cat = iteration++ % 2 ? "codingCat" : "compilingCat";
        // 	panel.title = cat;
        // 	const text = cat == "codingCat" ? "I am a coding cat" : "I am compiling cat~!";
        // 	panel.webview.html = getWebViewContent(cats[cat], text);
        // }
        // updateWebView();
        // const updateUI = setInterval(updateWebView, 2000);
        // // perform cleanup before closing the webview
        // panel.onDidDispose(() => {
        // 	clearInterval(updateUI);
        // }, null, context.subscriptions);
        /**
         * @name dynamicLoad
         * @summary end
         */
    });
    // subscription are created when you create a new UI
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//
function deactivate() {
    console.log("deactiavte");
}
exports.deactivate = deactivate;
function getWebViewContent(cat, text) {
    return `<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Cat Coding</title>
				</head>
				<body style="text-align:center;">
					<img src="${cat}" width="300" />
					<h1>${text}</h1>
				</body>
			</html>`;
}
// function updateWebViewForCat(panel: vscode.WebviewPanel, catName: keyof typeof cats){
// 	panel.title = catName;
// 	panel.webview.html = getWebViewContent(cats[catName], "I am good");
// }
//# sourceMappingURL=extension_old.js.map