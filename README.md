# Intelligent IDE

## Overview 📝

**Intelligent IDE** is a feature-rich VS Code extension designed to enhance developer productivity by automating routine coding tasks. Writing efficient code requires significant time and effort, from structuring functions to debugging and ensuring continuous integration. This extension aims to streamline these tasks by providing intelligent code generation, automated debugging, and seamless CI/CD integration. By reducing manual intervention, **Intelligent IDE** allows developers to focus more on problem-solving and creativity while minimizing repetitive and error-prone activities.

With this extension, developers can quickly generate function templates and test cases, receive intelligent debugging suggestions based on error patterns, and automate CI/CD processes directly from their IDE. Whether you're a beginner looking to improve coding efficiency or an experienced developer seeking automation, **Intelligent IDE** provides powerful tools to optimize your workflow.

## Features 🚀

### **1. Automated Code Generation** ✍️

- Instantly insert function templates with placeholders for function names and parameters.
- Generate test cases for functions using predefined test structures.
- Simplifies repetitive code writing, saving valuable development time.

### **2. Advanced Debugging Assistance** 🛠️

- Identifies common JavaScript errors such as `ReferenceError` and `SyntaxError`.
- Provides real-time suggestions to fix issues, reducing debugging time.
- Displays helpful messages in VS Code to guide developers toward quick resolutions.

### **3. CI/CD Automation** 🚀

- Seamlessly integrates with GitHub Actions to automate testing and deployment.
- Ensures a smooth and efficient development pipeline with minimal manual intervention.
- Helps maintain code quality and stability by enforcing automated build and deployment checks.

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

### **Code Generation**

- Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P` on Mac).
- Search for **Insert Function Template** or **Insert Test Template**.
- Select and insert the desired snippet.

### **Debugging Assistance**

- If a `ReferenceError` or `SyntaxError` is detected, the extension suggests possible fixes.
- Run the command **Debug Helper** from the Command Palette to check for known issues.

### **CI/CD Automation**

- The extension integrates with GitHub Actions to automate testing and deployment.
- Ensures code quality by enforcing automated checks before merging new changes.

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

### **GitHub Actions Failing on Tests**

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

Developed by 🚀
