import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import useProfile from "./customHooks/useProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { getProfile } from "./features/ProfileSlice";
import Layout from "./components/layout/Layout";
import FindUsers from "./pages/findUsers/FindUsers";
// import { getMessages, subscribeToMessage, unSubscribeToMessage } from "./features/ChatSlice";
// import useSelectedUser from "./customHooks/useSelectedUser";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const loading = useSelector((item: RootState) => item?.profile?.loading);
  const profile = useProfile();
  // const selectedUser = useSelectedUser()
  console.log("Profile", profile);
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
      </Routes>
    </Layout>
  );
};

export default App;
