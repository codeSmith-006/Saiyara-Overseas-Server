import Application from "./application.model.js";
import visaModel from "../visas/visa.model.js";

/* ================= APPLY VISA ================= */

export const applyVisa = async (req, res) => {
  try {
    const visa = await visaModel.findOne({ slug: req.body.visaId });

    if (!visa) {
      return res.status(404).json({ message: "Visa not found" });
    }

    const dob =
      req.body.dob === "0001-01-01" ? null : new Date(req.body.dob);

    const app = await Application.create({
      user: req.user?._id || null,
      visa: visa._id,

      applicationId: req.body.id,
      category: req.body.category,
      country: req.body.country,

      fullNameEn: req.body.fullNameEn,
      fullNameBn: req.body.fullNameBn,
      nationality: req.body.nationality,

      dob,

      passportNumber: req.body.passport,
      nidNumber: req.body.nidNumber,

      email: req.body.email,
      phone: req.body.phone,

      presentAddress: req.body.presentAddress,
      permanentAddress: req.body.permanentAddress,

      submittedAt: req.body.submittedAt,
    });

    res.status(201).json(app);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

/* ================= USER APPLICATIONS ================= */

export const getMyApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user._id })
    .populate("visa")
    .sort({ createdAt: -1 });

  res.json(apps);
};

/* ================= ADMIN: GET ALL APPLICATIONS ================= */

export const getAllApplications = async (req, res) => {
  const apps = await Application.find()
    .populate("visa")
    .populate("user", "email")
    .sort({ createdAt: -1 });

  res.json(apps);
};

/* ================= ADMIN: UPDATE STATUS ================= */

export const updateApplicationStatus = async (req, res) => {
  const app = await Application.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
      adminNote: req.body.adminNote,
    },
    { new: true }
  );

  res.json(app);
};
