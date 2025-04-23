# MCP-Zerodha

**MCP-Zerodha** is a Model Context Protocol (MCP) server that interfaces with the Zerodha trading API, enabling access to live market data and trading operations through the Claude Desktop App.

---


## 🧠 About MCP (Model Context Protocol)

Model Context Protocol (MCP) is a specification for tools like Claude to interact with external APIs and services using structured JSON over standard input/output streams.

This project wraps the Zerodha trading API into an MCP-compatible interface, enabling AI models to perform tasks such as:

- Fetching live market data
- Placing and managing trades
- Analyzing portfolio performance

---

## 🚀 Getting Started

Follow these steps to install and run MCP-Zerodha:

1. **Clone the repository**:
   ```bash
   git clone https://your-repo-url/MCP-zerodha.git
   cd MCP-zerodha
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Verify** that `dist/index.js` exists and is properly referenced in your Claude config.

---

## 🔧 Setup for Claude Desktop App

To use this MCP server with the Claude Desktop App, add the following configuration to the `"mcpServers"` section of your `claude_desktop_config.json` file:

```json
"zerodha": {
  "type": "stdio",
  "command": "node",
  "args": [
    "/absolute/path/to/MCP-zerodha/dist/index.js"
  ],
  "env": {
    "ZERODHA_API_KEY": "your-api-key",
    "ZERODHA_API_SECRET": "your-api-secret",
    "ZERODHA_REQUEST_TOKEN": "your-request-token",
    "ZERODHA_ACCESS_TOKEN": "your-access-token"
  }
}
```

> 📌 **Tip:** Replace `"/absolute/path/to/MCP-zerodha/dist/index.js"` with the full path to your project directory. Use `pwd` in your terminal to get the current working directory and append `/dist/index.js` to it.

---

## 🌐 Environment Variables

The following environment variables are required to authenticate with the Zerodha API:

| Variable Name            | Description                                      |
|-------------------------|--------------------------------------------------|
| `ZERODHA_API_KEY`       | Zerodha API Key                                  |
| `ZERODHA_API_SECRET`    | Zerodha API Secret                               |
| `ZERODHA_REQUEST_TOKEN` | Temporary token obtained during login            |
| `ZERODHA_ACCESS_TOKEN`  | Access token generated after login handshake     |

Ensure these are set securely and never shared publicly.

---

## 📬 Contact

**Developed by:** Shubham  
**Email:** [sharmashubham6822@gmail.com](mailto:sharmashubham6822@gmail.com)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

