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
import InstallAppButton from "./components/installAppButton/InstallAppButton";
// import { getMessages, subscribeToMessage, unSubscribeToMessage } from "./features/ChatSlice";
// import useSelectedUser from "./customHooks/useSelectedUser";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useProfile();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const syncMessages = useCallback(async () => {
    console.log("🌍 User is online. Syncing messages...");
  
    try {
      const unsentMessages = await getMessagesFromDB();
      
      if (unsentMessages.length === 0) {
        console.log("⚠️ No unsent messages to sync.");
        return;
      }
  
      console.log("📩 Found unsent messages:", unsentMessages);
  
      const sendPromises = unsentMessages.map(async (msg) => {
        const payload: SendMessagePayload = {
          selectedUserId: msg.recieverId,
          loggedinUserId: msg.senderId!,
          text: msg.text,
        };
  
        return store.dispatch(sendMessage(payload)).unwrap();
      });
  
      await Promise.all(sendPromises); // ✅ Send all messages concurrently
      console.log("🌍 User is online. Syncing complated...");
      await clearMessages(); // ✅ Remove synced messages from IndexedDB
  
      console.log("✅ All offline messages sent and cleared from IndexedDB.");
    } catch (error) {
      console.error("❌ Error syncing messages:", error);
    }
  }, []);
  
  

  useEffect(() => {
    window.addEventListener("online", syncMessages);

    return () => {
      console.log("🛑 Cleaning up event listener.");
      window.removeEventListener("online", syncMessages);
    };
  }, [syncMessages]);
  

  return (
    <Layout>
        <InstallAppButton />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={!profile?.success ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={profile?.success ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/find-users" element={<FindUsers />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </Layout>
  );
};

export default App;
