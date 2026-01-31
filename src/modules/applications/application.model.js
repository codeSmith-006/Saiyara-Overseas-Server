import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // 🔐 User (nullable for guest applications)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // 🛂 Visa reference
    visa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visa",
      required: true,
    },

    // 📄 Application Meta
    applicationId: {
      type: String,
      unique: true,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    // 👤 Applicant Identity
    fullNameEn: {
      type: String,
      required: true,
      trim: true,
    },

    fullNameBn: {
      type: String,
      trim: true,
    },

    nationality: {
      type: String,
      default: "Bangladeshi",
    },

    dob: {
      type: Date,
      default: null,
    },

    // 🪪 Documents
    passportNumber: {
      type: String,
      required: true,
    },

    nidNumber: {
      type: String,
      required: true,
    },

    // 📞 Contact Info
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    // 🏠 Address
    presentAddress: {
      type: String,
      required: true,
    },

    permanentAddress: {
      type: String,
      required: true,
    },

    // 📌 Status & Admin
    status: {
      type: String,
      enum: ["SUBMITTED", "PROCESSING", "APPROVED", "REJECTED"],
      default: "SUBMITTED",
    },

    adminNote: {
      type: String,
      default: "",
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
