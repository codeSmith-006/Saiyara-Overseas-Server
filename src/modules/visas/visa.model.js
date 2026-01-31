import mongoose from "mongoose";

const visaSchema = new mongoose.Schema(
  {
    slug: {
      type: String, // saudi-work-1, kuwait-factory-1
      unique: true,
      required: true,
      index: true,
    },

    country: {
      type: String,
      required: true,
      lowercase: true,
    },

    category: {
      type: String,
      required: true,
    },

    title: {
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },

    salary: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String },
    },

    processingTime: {
      en: { type: String },
      bn: { type: String },
    },

    validity: {
      en: { type: String },
      bn: { type: String },
    },

    fee: {
      type: Number,
      required: true,
    },

    /* ================= NEW FIELDS ================= */

    requirements: {
      en: [{ type: String }], // each line = one item
      bn: [{ type: String }],
    },

    requiredDocuments: {
      en: [{ type: String }],
      bn: [{ type: String }],
    },

    applicationProcess: {
      en: [{ type: String }],
      bn: [{ type: String }],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Visa", visaSchema);
