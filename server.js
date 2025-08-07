import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import payoutRoutes from './routes/payoutRoutes.js';
import mockRoutes from './routes/mockRoutes.js'; // ✅ NEW

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Health check
app.get("/", (req, res) => {
  res.send("✅ Wallet Payout API is running!");
});

// Routes
app.use("/api/payout", payoutRoutes);
app.use("/mock-cashfree", mockRoutes); // ✅ Add mock routes here

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "⛔ Route not found" });
});

// DB & Server start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
