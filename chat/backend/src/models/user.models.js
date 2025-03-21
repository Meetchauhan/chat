import mongoose from "mongoose";

const connectedUsers = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Storing user ID as ObjectId
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted"],
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
    connectedUsers: [connectedUsers],
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
