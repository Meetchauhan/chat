import UsersList from "../usersList/UsersList";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 w-full md:w-[35%] lg:w-[25%] min-h-full h-[calc(100dvh-60px)] md:h-[calc(100dvh-72px)] overflow-x-auto">
      <div className="">
        <UsersList />
      </div>
    </div>
  );
};
export default Sidebar;
