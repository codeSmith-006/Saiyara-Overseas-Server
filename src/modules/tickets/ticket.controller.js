import Ticket from "./ticket.model.js";

/* ================= CREATE TICKET ================= */
export const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({
      ...req.body,
      user: req.user._id,
      ticketId: `TKT-${Date.now()}`,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create ticket",
    });
  }
};

/* ================= GET MY TICKETS ================= */
export const getMyTickets = async (req, res) => {
  try {
    console.log(req.user._id);
    const tickets = await Ticket.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    console.log(tickets);

    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tickets",
    });
  }
};

/* ================= GET ALL TICKETS (ADMIN) ================= */
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("user", "fullName email role")
      .sort({ createdAt: -1 });

    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tickets",
    });
  }
};

/* ================= UPDATE TICKET STATUS ================= */
export const updateTicketStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update ticket status",
    });
  }
};
