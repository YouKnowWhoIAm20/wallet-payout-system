// routes/mockRoutes.js
import express from "express";
const router = express.Router();

// 🔐 Mock authorize
router.post("/v1/authorize", (req, res) => {
  return res.json({
    status: "SUCCESS",
    subCode: "200",
    data: { token: "mocked_token_123456" }
  });
});

// 🧑‍💼 Mock beneficiary creation
router.post("/v2/beneficiaries", (req, res) => {
  return res.json({
    status: "SUCCESS",
    message: "Beneficiary created successfully",
    subCode: "200"
  });
});

// 💸 Mock transfer
router.post("/v2/transfer", (req, res) => {
  return res.json({
    status: "SUCCESS",
    message: "Transfer initiated successfully",
    subCode: "200"
  });
});

export default router;
