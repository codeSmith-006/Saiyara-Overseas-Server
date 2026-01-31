import Visa from "./visa.model.js";

export const createVisa = async (req, res) => {
  const visa = await Visa.create(req.body);
  res.status(201).json(visa);
};

export const getVisas = async (req, res) => {
  const visas = await Visa.find();
  res.json(visas);
};

export const updateVisa = async (req, res) => {
  const visa = await Visa.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(visa);
};

export const deleteVisa = async (req, res) => {
  await Visa.findByIdAndDelete(req.params.id);
  res.json({ message: "Visa deleted" });
};
