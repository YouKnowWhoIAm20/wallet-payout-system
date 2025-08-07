import { getAuthToken, BASE_URL } from "../config/cashfree.js";
import User from "../models/userModel.js";
import axios from "axios";

// ✅ Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({
      name,
      email,
      walletBalance: 1000,
    });

    await newUser.save();

    res.status(201).json({
      message: "✅ User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("❌ Create user error:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// ✅ Add beneficiary using V2 API
export const addBeneficiary = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, phone, bankAccount, ifsc } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = await getAuthToken(); // 🔐 Uses hardcoded credentials

    const payload = {
      beneId: userId,
      name,
      email,
      phone,
      bankAccount,
      ifsc,
      address1: "India",
    };

    const response = await axios.post(
      `${BASE_URL}/v2/beneficiaries`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      message: "✅ Beneficiary added successfully",
      response: response.data,
    });
  } catch (error) {
    console.error("❌ Add beneficiary error:", error?.response?.data || error.message);
    res.status(500).json({
      message: "Error adding beneficiary",
      error: error?.response?.data || error.message,
    });
  }
};

// ✅ Withdraw funds using V2 Transfer API
export const withdrawFunds = async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.walletBalance < amount) {
      return res.status(400).json({ message: "❌ Insufficient wallet balance" });
    }

    const token = await getAuthToken(); // 🔐 Uses hardcoded credentials

    const transferPayload = {
      beneId: userId,
      amount,
      transferId: `tx_${Date.now()}`,
      transferMode: "banktransfer",
    };

    const response = await axios.post(
      `${BASE_URL}/v2/transfer`,
      transferPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // 💰 Update wallet balance
    user.walletBalance -= amount;
    await user.save();

    res.status(200).json({
      message: "✅ Withdrawal successful",
      data: response.data,
    });
  } catch (error) {
    console.error("❌ Withdraw error:", error?.response?.data || error.message);
    res.status(500).json({
      message: "Withdrawal failed",
      error: error?.response?.data || error.message,
    });
  }
};
