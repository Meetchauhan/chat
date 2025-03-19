import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  disconnectSocker,
  logout,
  resetSendOtpState,
} from "../../features/AuthSlice";
import { getProfile } from "../../features/ProfileSlice";
import { useNavigate } from "react-router-dom";
import { closeToast } from "../../features/ToastSlice";

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const result = await dispatch(logout()).unwrap();
    if (result?.success) {
      dispatch(getProfile());
      dispatch(resetSendOtpState());
      navigate("/login", { replace: true });
      dispatch(closeToast());
      dispatch(disconnectSocker());
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="cursor-pointer hover:bg-gray-700 ease-in-out duration-300 rounded-sm"
    >
      <span className="text-lg text-orange-600 p-2">Logout</span>
    </button>
  );
};
export default Logout;
