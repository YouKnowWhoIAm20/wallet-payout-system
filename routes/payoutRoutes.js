// routes/payoutRoutes.js

import express from "express";
import {
  createUser,
  addBeneficiary,
  withdrawFunds
} from "../controllers/payoutController.js";

const router = express.Router();

router.post("/user", createUser);
router.post("/beneficiary/:userId", addBeneficiary);
router.post("/withdraw/:userId", withdrawFunds);

export default router;
