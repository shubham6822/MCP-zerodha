import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";

dotenv.config();
// Load environment variables from .env
console.log(
  "Environment Variables Loaded",
  process.env.ZERODHA_API_KEY,
  process.env.ZERODHA_API_SECRET
);

const apiKey = "your_api_key";
const apiSecret = "your_api_secret";
const requestToken = "your_request_token";

const kc = new KiteConnect({ api_key: apiKey });

async function init() {
  try {
    await generateSession();
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    kc.setAccessToken(response.access_token);
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();
