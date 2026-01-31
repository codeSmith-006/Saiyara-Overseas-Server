import express from "express";
import {
  createVisa,
  getVisas,
  updateVisa,
  deleteVisa,
} from "./visa.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getVisas);
router.post("/", protect, authorize("ADMIN", "SUPER_ADMIN"), createVisa);
router.put("/:id", protect, authorize("ADMIN", "SUPER_ADMIN"), updateVisa);
router.delete("/:id", protect, authorize("SUPER_ADMIN"), deleteVisa);

export default router;
