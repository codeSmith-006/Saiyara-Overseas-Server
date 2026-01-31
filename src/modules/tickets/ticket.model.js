import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    // 🔗 Who submitted the ticket
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🧾 Ticket reference ID (human readable)
    ticketId: {
      type: String,
      required: true,
      unique: true,
    },

    // ✈️ Trip info
    type: {
      type: String,
      enum: ["one-way", "round-trip"],
      required: true,
    },

    from: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    returnDate: {
      type: Date,
      default: null,
    },

    passengers: {
      type: Number,
      required: true,
      min: 1,
      max: 9,
    },

    airline: {
      type: String,
      default: "Any",
    },

    // 👤 Contact info (snapshot — even if user changes later)
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    // 📊 Ticket workflow status
    status: {
      type: String,
      enum: ["pending", "contacted", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

export default mongoose.model("Ticket", ticketSchema);
