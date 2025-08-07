// // config/cashfree.js ✅ ✅ ✅

// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// // config/cashfree.js
// import axios from "axios";

// // ✅ Hardcoded credentials from the task
// const CASHFREE_CLIENT_ID = "CF10345918D29H940DRH1C73B2GDJG";
// const CASHFREE_CLIENT_SECRET = "cfsk_ma_test_5c256c95a40f542cf7b0f87e8e69ca07_51278971";
// export const BASE_URL = "https://sandbox.cashfree.com/payout";

// export const getAuthToken = async () => {
//   try {
//     const response = await axios.post(
//       `${BASE_URL}/v1/authorize`,
//       {},
//       {
//         headers: {
//           "X-Client-Id": CASHFREE_CLIENT_ID,
//           "X-Client-Secret": CASHFREE_CLIENT_SECRET,
//         },
//       }
//     );

//     const token = response.data?.data?.token;
//     if (!token) {
//       console.error("❌ Token not found in response:", response.data);
//       throw new Error("Token not present in response");
//     }

//     console.log("✅ Token fetched:", token);
//     return token;
//   } catch (err) {
//     console.error("❌ Token fetch failed:", err.response?.data || err.message);
//     throw new Error("Failed to fetch Cashfree token.");
//   }
// };


// config/cashfree.js ✅ MOCKED VERSION

// 🧪 This mocks the Cashfree API so your app doesn't fail

export const BASE_URL = "http://localhost:5050/mock-cashfree"; // ✅ Local mock server

export const getAuthToken = async () => {
  console.log("⚠️ [MOCK] Returning fake token");
  return "mocked_token_123456789";
};


