import User from "./user.model.js";

export const getMe = (req, res) => {
  res.json(req.user);
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

export const updateMe = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: req.body,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.json(user);
};
