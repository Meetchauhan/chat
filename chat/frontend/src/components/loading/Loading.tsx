import spinner from "../../images/loader.svg";
const Loading = () => {
  return (
    <div className=" w-full h-[100dvh] bg-gray-800">
      <div className="text-white font-bold text-2xl h-full flex items-center justify-center">
        <div className="">
          <div className="flex justify-center">
            <img src={spinner} alt="loader" className="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
