import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";

dotenv.config();

// Initialize the KiteConnect instance with your API key
// and set the access token to null initially
if (
  !process.env.ZERODHA_API_KEY ||
  !process.env.ZERODHA_API_SECRET ||
  !process.env.ZERODHA_REQUEST_TOKEN ||
  !process.env.ZERODHA_ACCESS_TOKEN
) {
  console.error(
    "Please set ZERODHA_API_KEY, ZERODHA_API_SECRET, and ZERODHA_REQUEST_TOKEN in your .env file."
  );
  process.exit(1);
}
const apiKey = process.env.ZERODHA_API_KEY;
const apiSecret = process.env.ZERODHA_API_SECRET;
const requestToken = process.env.ZERODHA_REQUEST_TOKEN;
const accessToken = process.env.ZERODHA_ACCESS_TOKEN;

const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());

async function init() {
  try {
    // await generateSession();
    kc.setAccessToken(accessToken);
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     console.log("Session response:", response.access_token);
//     kc.setAccessToken(response.access_token);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

export async function placeOrder(
  tradingsymbol: string,
  type: "BUY" | "SELL",
  quantity: number
) {
  try {
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      transaction_type: type,
      quantity,
      order_type: "MARKET",
      product: "CNC",
    });
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();
