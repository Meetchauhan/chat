import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../features/RegstrationSlice";
import AuthSlice from "../features/AuthSlice";
import ToastSlice from "../features/ToastSlice";
import ProfileSlice from "../features/ProfileSlice";
import ChatSlice from "../features/ChatSlice";
import UsersSlice from "../features/UsersSlice";
import SendRequestSlice from "../features/SendRequestSlice";
import AcceptRequestSlice from "../features/AcceptRequestSlice";
import mobileMenuSlice from "../features/mobileMenuSlice";
import InstallAppSlice from "../features/InstallAppSlice";
import SendNotificationSlice from "../features/SendNotificationSlice";
import AdminUserSlice from "../features/AdminUsersSlice";

const store = configureStore({
  reducer: {
    registration: RegistrationSlice,
    auth: AuthSlice,
    toast: ToastSlice,
    profile: ProfileSlice,
    chat: ChatSlice,
    users: UsersSlice,
    sendRequest: SendRequestSlice,
    acceptRequest: AcceptRequestSlice,
    menu: mobileMenuSlice,
    installAppModal: InstallAppSlice,
    sendNotification: SendNotificationSlice,
    adminUsers: AdminUserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
