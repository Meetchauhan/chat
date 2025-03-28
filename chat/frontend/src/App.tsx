import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import {useProfile} from "./customHooks/useProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { getProfile } from "./features/ProfileSlice";
import Layout from "./components/layout/Layout";
import FindUsers from "./pages/findUsers/FindUsers";
import Request from "./pages/request/Request";
// import { getMessages, subscribeToMessage, unSubscribeToMessage } from "./features/ChatSlice";
// import useSelectedUser from "./customHooks/useSelectedUser";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useProfile();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Layout>
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
