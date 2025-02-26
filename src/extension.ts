import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Register a command for inserting a function template
  let disposable = vscode.commands.registerCommand(
    "intelligent-ide.insertFunction",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const snippet = new vscode.SnippetString(
          "function ${1:functionName}(${2:params}) {\n\t${3:// Your code here}\n}"
        );
        editor.insertSnippet(snippet);
      }
    }
  );

  context.subscriptions.push(disposable);

  let testCommand = vscode.commands.registerCommand(
    "intelligent-ide.insertTest",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const snippet = new vscode.SnippetString(
          "test('${1:Function Name}', () => {\n\texpect(${1}).toBe(${2:Expected Value});\n});"
        );
        editor.insertSnippet(snippet);
      }
    }
  );

  context.subscriptions.push(testCommand);

  let debugCommand = vscode.commands.registerCommand(
    "intelligent-ide.debugHelper",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const text = document.getText();

        if (text.includes("ReferenceError")) {
          vscode.window.showInformationMessage(
            "Possible Fix: Check if the variable is declared."
          );
        } else if (text.includes("SyntaxError")) {
          vscode.window.showInformationMessage(
            "Possible Fix: Check for missing brackets or semicolons."
          );
        } else {
          vscode.window.showInformationMessage("No known issues detected.");
        }
      }
    }
  );

  context.subscriptions.push(debugCommand);
}

export function deactivate() {}
