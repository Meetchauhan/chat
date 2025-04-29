import User from "../models/user.models.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length > 0) {
      res.status(200).json({ success: true, data: users });
    } else {
      res.status(200).json({ success: false, message: "No user found...!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { _id } = req.body;
  const user = await User.findByIdAndDelete(_id);
  try {
    if (_id) {
      res.status(200).json({
        success: true,
        message: "User deleted successfully...!",
        data: user,
      });
    } else {
      res.status(200).json({ success: false, message: "User not found...!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error...!" });
  }
};
