import { Outlet } from "react-router-dom";
import { LayoutProp } from "../../../types/Types";
import AdminSidebar from "../adminSidebar/AdminSidebar";

const AdminLayout: React.FC<LayoutProp> = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full h-screen bg-gray-800 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
