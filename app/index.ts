import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { placeOrder } from "./tools/trade";

// Create an MCP server
const server = new McpServer({
  name: "Zerodha",
  version: "1.0.0",
  description: "A server for Zerodha trading",
});

// Add an addition tool
server.tool(
  "buy-stock",
  "Buy a stock on zerodha trading platform.It executes a market order with real money ",
  { stock: z.string(), quantity: z.number() },
  ({ stock, quantity }) => {
    placeOrder(stock, "BUY", quantity);
    return {
      content: [
        {
          type: "text",
          text: `Order placed for ${quantity} shares of ${stock} to buy`,
        },
      ],
    };
  }
);

server.tool(
  "sell-stock",
  "Sell a stock on zerodha trading platform.It executes a market order with real money ",
  { stock: z.string(), quantity: z.number() },
  ({ stock, quantity }) => {
    placeOrder(stock, "SELL", quantity);
    return {
      content: [
        {
          type: "text",
          text: `Order placed for ${quantity} shares of ${stock} to sell`,
        },
      ],
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
const init = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Connected to MCP server");
};

init();
