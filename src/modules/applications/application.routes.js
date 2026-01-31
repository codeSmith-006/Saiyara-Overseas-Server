import express from "express";
import {
  applyVisa,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
} from "./application.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", protect, applyVisa);
router.get("/me", protect, getMyApplications);

// 🔐 ADMIN ONLY
router.get(
  "/",
  protect,
  authorize("ADMIN", "SUPPORT", "SUPER_ADMIN"),
  getAllApplications
);

router.put(
  "/:id",
  protect,
  authorize("ADMIN", "SUPPORT", "SUPER_ADMIN"),
  updateApplicationStatus
);

export default router;
