import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firebaseUid: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },

    fullName: String,
    photoURL: String,
    phone: String,
    district: String,
    country: { type: String, default: "Bangladesh" },
    language: { type: String, default: "bn" },

    role: {
      type: String,
      enum: ["USER", "ADMIN", "EDITOR", "SUPPORT", "SUPER_ADMIN"],
      default: "USER",
    },

    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
