import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import { useProfile } from "./customHooks/useProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useCallback, useEffect } from "react";
import { getProfile } from "./features/ProfileSlice";
import Layout from "./components/layout/Layout";
import FindUsers from "./pages/findUsers/FindUsers";
import Request from "./pages/request/Request";
import { clearMessages, getMessagesFromDB } from "./db/db";
import { sendMessage } from "./features/ChatSlice";
import { SendMessagePayload } from "./types/Types";
import store from "./store/store";
import { setupFirebaseMessaging } from "./firebase";
import Dashboard from "./admin/pages/dashboard/Dahsboard";
import AllChats from "./admin/pages/allChats/AllChats";
import Users from "./admin/pages/users/Users";
import AdminLayout from "./admin/components/adminLayout/AdminLayout";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useProfile();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    setupFirebaseMessaging();
  }, []);

  const syncMessages = useCallback(async () => {
    try {
      const unsentMessages = await getMessagesFromDB();

      if (unsentMessages.length === 0) {
        return;
      }

      const sendPromises = unsentMessages.map(async (msg) => {
        const payload: SendMessagePayload = {
          selectedUserId: msg.recieverId,
          loggedinUserId: msg.senderId!,
          text: msg.text,
          senderFirstName: msg.senderFirstName,
        };

        return store.dispatch(sendMessage(payload)).unwrap();
      });

      await Promise.all(sendPromises);
      await clearMessages();
    } catch (error) {
      console.error("Error syncing messages:", error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("online", syncMessages);

    return () => {
      window.removeEventListener("online", syncMessages);
    };
  }, [syncMessages]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={!profile?.success ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={
          profile?.success ? (
            <Layout>
              <Home />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/find-users"
        element={
          <Layout>
            <FindUsers />
          </Layout>
        }
      />
      <Route
        path="/request"
        element={
          <Layout>
            <Request />
          </Layout>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          // profile?.isAdmin ? (
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
          // ) : (
          // <Navigate to="/" />
          // )
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="all-chats" element={<AllChats />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;
