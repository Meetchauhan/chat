import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../features/RegstrationSlice";
import AuthSlice from "../features/AuthSlice";
import ToastSlice from "../features/ToastSlice";
import ProfileSlice from "../features/ProfileSlice";
import ChatSlice from "../features/ChatSlice";
import UsersSlice from "../features/UsersSlice";
import SendRequestSlice from "../features/SendRequestSlice";

const store = configureStore({
  reducer: {
    registration: RegistrationSlice,
    auth: AuthSlice,
    toast: ToastSlice,
    profile: ProfileSlice,
    chat: ChatSlice,  
    users:UsersSlice,
    sendRequest: SendRequestSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
