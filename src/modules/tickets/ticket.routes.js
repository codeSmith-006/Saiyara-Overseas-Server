import express from "express";
import {
  createTicket,
  getMyTickets,
  getAllTickets,
  updateTicketStatus,
} from "./ticket.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";


const router = express.Router();

// USER
router.post("/", protect, createTicket);
router.get("/me", protect, getMyTickets);

// ADMIN
router.get("/", protect, authorize("ADMIN", "SUPER_ADMIN"), getAllTickets);
router.patch(
  "/:id",
  protect,
  authorize("ADMIN", "SUPER_ADMIN"),
  updateTicketStatus
);

export default router;
