import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useMemo } from "react";

const useSelectedUser = () => {
  const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);

  // Memoize the selected user to prevent unnecessary updates
  const getStoredSelectedUser = useMemo(() => {
    if (selectedUser) return selectedUser;

    const storedSelectedUser = localStorage.getItem("selectedUser");
    return storedSelectedUser ? JSON.parse(storedSelectedUser) : null;
  }, [selectedUser]); // Only re-compute when `selectedUser` changes

  return getStoredSelectedUser;
};

export default useSelectedUser;
