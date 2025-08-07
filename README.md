# 💸 Wallet-Based Payout System (Mocked Cashfree Integration)

This is a full-stack Node.js backend system that simulates a wallet-based payout flow using a mocked version of the Cashfree Payouts API. Deployed on Render, connected to MongoDB Atlas.

## 🔗 Live URL
🌐 [https://wallet-payout-system.onrender.com](https://wallet-payout-system.onrender.com)

## 🚀 Features

- Create Users with Wallet Balance
- Add Beneficiary (Mocked)
- Withdraw to Bank (Mocked)
- MongoDB Atlas integration
- REST API built with Express
- Deployed using Render

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Render (Deployment)
- Curl/Postman for testing

## 📜 API Endpoints


## 💸 Wallet Payout System — API Usage Examples

### 🔹 1. Create a User

```bash
curl -X POST https://wallet-payout-system.onrender.com/api/payout/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "mockuser@example.com"
  }'

### 🔹 2. Add Beneficiary (Replace :userId with actual ID)

curl -X POST https://wallet-payout-system.onrender.com/api/payout/beneficiary/USER_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "mockuser@example.com",
    "phone": "9999999999",
    "bankAccount": "1234567890",
    "ifsc": "HDFC0001234"
  }'


### 🔹 3. Withdraw Amount (Replace :userId with actual ID)

curl -X POST https://wallet-payout-system.onrender.com/api/payout/withdraw/USER_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 500
  }'

