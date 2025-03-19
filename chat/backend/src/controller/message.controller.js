import User from "../models/user.models.js";
import Message from "../models/message.modals.js";
import { getReceiverSocketId, io } from "../util/socket.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req?.user?._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("");
    res.status(200).json({ success: true, data: filteredUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const userId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: userId, recieverId: userToChatId },
        { senderId: userToChatId, recieverId: userId },
      ],
    });
    res.status(200).json({ success: true, message: messages });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    const newMessage = new Message({
      senderId,
      recieverId,
      text,
      image,
    });
    const sentMessage = await newMessage.save();
    const receiverSocketId = getReceiverSocketId(recieverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(200).json({ success: true, message: sentMessage });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
