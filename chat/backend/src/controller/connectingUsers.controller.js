import User from "../models/user.models.js";

export const sendConnectionRequest = async (req, res) => {
  const { recieverId } = req.body;
  const loggedInUserId = req?.user?._id; // Sender ID

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const receiverUser = await User.findById(recieverId);
    const senderUser = await User.findById(loggedInUserId);

    if (!receiverUser || !senderUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Check if request already exists in receiver's requests
    const existingRequest = receiverUser.requests.find(
      (req) => req.senderId.toString() === loggedInUserId.toString()
    );

    if (existingRequest) {
      return res.status(400).json({ message: "Connection request already sent" });
    }

    // ✅ Determine request status based on receiver's online status
    // const isReceiverLoggedIn = receiverUser?.isLoggedIn || false;
    // const requestStatus = isReceiverLoggedIn ? "confirm" : "pending";

    const requestStatus =  "pending";

    // ✅ Add request to receiver's `requests` array
    receiverUser.requests.push({
      senderId: loggedInUserId,
      status: requestStatus,
    });

    await receiverUser.save();

    res.status(200).json({
      success: true,
      message: "Connection request sent successfully",
      request: {
        senderId: loggedInUserId,
        status: requestStatus,
      },
    });
  } catch (error) {
    console.error("Error sending request:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


export const getUserRequests = async (req, res) => {
  const loggedInUserId = req?.user?._id; // Logged-in user

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(loggedInUserId).select("requests").populate({
      path: "requests.senderId",
      select: "firstName lastName email",
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      requests: user.requests,
    });
  } catch (error) {
    console.error("Error getting user requests:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getSentRequests = async (req, res) => {
  const loggedInUserId = req?.user?._id; // Logged-in user

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Find users where the logged-in user is the sender in `requests` array
    const usersWithRequests = await User.find({ "requests.senderId": loggedInUserId })
      .select("firstName lastName email requests")
      .populate({
        path: "requests.senderId",
        select: "firstName lastName email",
      });

    // Filter out only the requests sent by the logged-in user
    const sentRequests = usersWithRequests.map((user) => ({
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      status: user.requests.find(
        (req) => req.senderId.toString() === loggedInUserId.toString()
      )?.status,
    }));

    res.status(200).json({
      success: true,
      sentRequests,
    });
  } catch (error) {
    console.error("Error getting sent requests:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};



export const acceptConnectionRequest = async (req, res) => {
  const { recieverId } = req.body; // The sender's ID (who originally sent the request)
  const loggedInUserId = req?.user?._id; // The user accepting the request

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized: User not logged in" });
    }

    // Find receiver (logged-in user) and ensure the request exists
    const receiverUser = await User.findById(loggedInUserId);
    const senderUser = await User.findById(recieverId);

    if (!receiverUser || !senderUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the request in receiver's requests array
    const requestIndex = receiverUser.requests.findIndex(
      (req) => req.senderId.toString() === recieverId.toString()
    );

    if (requestIndex === -1) {
      return res.status(400).json({ message: "No pending request found" });
    }

    // Remove request from receiver's requests array
    receiverUser.requests.splice(requestIndex, 1);

    // Add sender to receiver's connectedUsers
    receiverUser.connectedUsers.push({
      userId: recieverId,
      status: "accepted",
    });

    // Add receiver to sender's connectedUsers
    senderUser.connectedUsers.push({
      userId: loggedInUserId,
      status: "accepted",
    });

    // Save both users
    await receiverUser.save();
    await senderUser.save();

    res.status(200).json({
      success: true,
      message: "Connection request accepted",
      receiver: {
        userId: receiverUser._id,
        connectedUsers: receiverUser.connectedUsers,
      },
      sender: {
        userId: senderUser._id,
        connectedUsers: senderUser.connectedUsers,
      },
    });
  } catch (error) {
    console.error("Error accepting request:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
