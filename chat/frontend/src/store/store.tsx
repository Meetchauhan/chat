import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../features/RegstrationSlice";
import AuthSlice from "../features/AuthSlice";
import ToastSlice from "../features/ToastSlice";
import ProfileSlice from "../features/ProfileSlice";
// import UsersSlice from "../features/UsersSlice";
import ChatSlice from "../features/ChatSlice";

const store = configureStore({
  reducer: {
    registration: RegistrationSlice,
    auth: AuthSlice,
    toast: ToastSlice,
    profile: ProfileSlice,
    // users: UsersSlice,
    chat: ChatSlice,  
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
