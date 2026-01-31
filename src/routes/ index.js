import "../config/dotenv.js"
import express from "express";
import userRoutes from "../modules/users/user.routes.js";
import visaRoutes from "../modules/visas/visa.routes.js";
import applicationRoutes from "../modules/applications/application.routes.js";
import ticketRoutes from "../modules/tickets/ticket.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/visas", visaRoutes);
router.use("/applications", applicationRoutes);
router.use("/tickets", ticketRoutes);

export default router;
