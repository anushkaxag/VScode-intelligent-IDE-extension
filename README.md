# Intelligent IDE

**Intelligent IDE** is a VS Code extension designed to enhance developer productivity through automated code generation, advanced debugging suggestions, and CI/CD automation.

## Features 🚀

- **Automated Code Generation**: Insert function templates and test cases with ease.
- **Advanced Debugging**: Get real-time bug fix suggestions.
- **CI/CD Automation**: Automate build and deployment processes.

## Installation 🛠️

### From Source

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/intelligent-ide.git
   cd intelligent-ide
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile the extension:
   ```sh
   npm run compile
   ```
4. Install the extension manually in VS Code:
   ```sh
   vsce package
   code --install-extension intelligent-ide-0.0.1.vsix
   ```

## Usage 📖

### Code Generation

- Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P` on Mac)
- Search for **Insert Function Template** or **Insert Test Template**
- Select and insert the desired snippet

### Debugging Assistance

- If a `ReferenceError` or `SyntaxError` is detected, the extension suggests possible fixes.
- Run the command **Debug Helper** from the Command Palette.

### CI/CD Automation

- The extension integrates with GitHub Actions to automate testing and deployment.

## Development & Contribution 🤝

### Running the Extension Locally

1. Open the project in VS Code.
2. Press `F5` to start debugging.
3. A new VS Code window will launch with the extension activated.

### Running Tests

```sh
xvfb-run -a npm test
```

### Publishing the Extension

1. Bump the version in `package.json`.
2. Publish using `vsce`:
   ```sh
   vsce publish
   ```

## Troubleshooting 🛠️

### GitHub Actions Failing on Tests

If tests fail due to missing X server errors, ensure your workflow includes:

```yaml
- name: Install xvfb
  run: sudo apt-get install xvfb

- name: Run tests in headless mode
  run: xvfb-run -a npm test
```

## License 📜

This project is licensed under the MIT License.

## Author ✨

Developed by Anushka Agrawal
