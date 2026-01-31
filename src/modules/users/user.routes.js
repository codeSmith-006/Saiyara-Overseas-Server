import express from "express";
import {
  getMe,
  getAllUsers,
  updateMe,
  updateUser,
  deleteUser,
} from "./user.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";


const router = express.Router();

// USER
router.get("/me", protect, getMe);
router.put("/me", protect, updateMe);

// ADMIN
router.get("/", protect, authorize("ADMIN", "SUPER_ADMIN"), getAllUsers);
router.put("/:id", protect, authorize("SUPER_ADMIN"), updateUser);
router.delete("/:id", protect, authorize("SUPER_ADMIN"), deleteUser);

export default router;
