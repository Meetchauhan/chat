import User from "../models/user.models.js";

export const sendConnectionRequest = async (req, res) => {
    const { recieverId } = req.body;
    try {
      const loggedInUserId = req?.user?._id;
      const receiverUser = await User.findById(recieverId);
      if (!receiverUser) {
        return res.status(404).json({ message: "Receiver user not found" });
      }
  
      const existingRequest = receiverUser.connectedUsers?.find(
        (conn) => conn.userId.toString() === loggedInUserId.toString()
      );
  
      if (existingRequest) {
        return res
          .status(400)
          .json({ message: "Connection request already sent" });
      }
  
      // Push sender's ID into receiver's connections array
      receiverUser.connectedUsers?.push({
        userId: loggedInUserId,
        status: "pending",
      });
  
      // Save the updated user document
      await receiverUser.save();
  
      res.status(200).json({
        success: true,
        message: "Connection request sent successfully",
        data: receiverUser,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
  
  export const acceptConnectionRequest = async (req, res) => {
    const { recieverId } = req.body; // The original sender's ID (meet@gmail.com)
    const loggedInUserId = req?.user?._id; // The receiver who is accepting the request (meet22@gmail.com)
  
    try {
      if (!loggedInUserId) {
        return res.status(401).json({ message: "Unauthorized: User not logged in" });
      }
  
      // ✅ Step 1: Update logged-in user's connection list (meet22@gmail.com)
      const receiverUser = await User.findOneAndUpdate(
        {
          _id: loggedInUserId,  // Update the receiver's (meet22@gmail.com) document
          "connectedUsers.userId": recieverId,  // Find the sender's (meet@gmail.com) request
          "connectedUsers.status": "pending", // Ensure it's still pending
        },
        { $set: { "connectedUsers.$.status": "accepted" } }, // Accept the request
        { new: true } // Return updated document
      );
  
      if (!receiverUser) {
        return res.status(404).json({ message: "No pending request found to accept" });
      }
  
      // ✅ Step 2: Update sender's connection list (meet@gmail.com)
      const senderUser = await User.findById(recieverId);
  
      if (!senderUser) {
        return res.status(404).json({ message: "Sender user not found" });
      }
  
      // Check if the receiver already exists in sender's connections
      const existingConnectionIndex = senderUser.connectedUsers?.findIndex(
        (conn) => conn.userId.toString() === loggedInUserId.toString()
      );
  
      if (existingConnectionIndex !== -1) {
        // Update existing connection status
        senderUser.connectedUsers[existingConnectionIndex].status = "accepted";
      } else {
        // Otherwise, add new connection
        senderUser.connectedUsers.push({
          userId: loggedInUserId,
          status: "accepted",
        });
      }
  
      await senderUser.save(); // Save sender's updated connections
  
      res.status(200).json({
        success: true,
        message: "Connection request accepted",
        receiver: receiverUser,
        sender: senderUser,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  };