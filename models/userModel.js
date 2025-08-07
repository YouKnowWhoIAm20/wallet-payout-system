import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  walletBalance: {
    type: Number,
    default: 1000
  },
  bankDetails: {
    accountNumber: String,
    ifsc: String,
    beneId: String
  }
});

export default mongoose.model("User", userSchema);
