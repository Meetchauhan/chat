import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Connected user's ID
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["accepted"], // Only stores confirmed connections
    default: "accepted",
  },
});

const requestSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId, // User who sent the request
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirm"],
    default: "pending",
  },
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
    },
    connectedUsers: [connectionSchema], // Stores accepted connections
    requests: [requestSchema], // Stores incoming requests
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
