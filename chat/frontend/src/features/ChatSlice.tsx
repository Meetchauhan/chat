import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, SendMessagePayload, UsersInitialState } from "../types/Types";
import axios from "axios";
import { Socket } from "socket.io-client";

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get("http://localhost:1322/api/message/users", {
    withCredentials: true,
  });
  return response.data;
});

export const getMessages = createAsyncThunk(
  "getMessage",
  async (_id: string) => {
    const response = await axios.get(
      `http://localhost:1322/api/message/${_id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  "sendMessage",
  async ({ selectedUserId, text }: SendMessagePayload) => {
    const response = await axios.post(
      `http://localhost:1322/api/message/send/${selectedUserId}`,
      { text },
      { withCredentials: true }
    );
    return response.data;
  }
);

// ✅ Updated: Use socket from authSlice

export const subscribeToMessages = (
  dispatch: (action: { type: string; payload: Message }) => void,
  socket: typeof Socket | null,
  selectedUserId: string,
  currentUserId: string | undefined,
  messageLoading: boolean
) => {
  if (!socket) return;

  // Ensure we don't add multiple listeners
  socket.off("newMessage"); // Remove any existing listener before adding a new one

  socket.on("newMessage", (newMessage: Message) => {
    console.log("🔵 New message received:", newMessage);

    // Ensure the message is meant for the currently selected chat
    console.log("messageLoading", messageLoading);
    
    if (!messageLoading) {
      if (
        (newMessage.senderId === selectedUserId &&
          newMessage.recieverId === currentUserId) ||
        (newMessage.senderId === currentUserId &&
          newMessage.recieverId === selectedUserId)
      ) {
        dispatch(addMessage(newMessage)); // Only add messages that match the selected chat
      }
    }
  });
};

// ✅ Updated: Use socket from authSlice for unsubscription
export const unSubscribeToMessage = (socket: SocketIOClient.Socket) => {
  console.log("🛑 Unsubscribing from messages.");
  socket.off("newMessage");
  // If you need to access the socket, get it from a stored reference
};

const initialState: UsersInitialState = {
  messages: [],
  users: null,
  selectedUser: null,
  userLoading: false,
  messageLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
      localStorage.setItem("selectedUser", JSON.stringify(action.payload));
    },
    removeSelectUser: (state) => {
      state.selectedUser = null;
      localStorage.setItem("selectedUser", JSON.stringify(null));
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      if (state.messageLoading === false) {
        if (!Array.isArray(state.messages)) {
          state.messages = []; // ✅ Ensure `messages` is always an array
        }
        state.messages.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.userLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.userLoading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getMessages.pending, (state) => {
        state.messageLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messageLoading = false;

        // Ensure action.payload.message is an array and replace state.messages
        if (action.payload && Array.isArray(action.payload.message)) {
          state.messages = action.payload.message; // REPLACE, not append
        } else {
          state.messages = []; // Default to an empty array if no messages are found
        }
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.messageLoading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(sendMessage.pending, (state) => {
        state.messageLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messageLoading = false;
        if (!Array.isArray(state.messages)) {
          state.messages = [];
        }

        if (action.payload) {
          state.messages = [...state.messages, action.payload]; // ✅ Correctly append messages
        }
      })

      .addCase(sendMessage.rejected, (state, action) => {
        state.messageLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { selectUser, addMessage, removeSelectUser } = chatSlice.actions;
export default chatSlice.reducer;
