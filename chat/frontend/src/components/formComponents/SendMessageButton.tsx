import { SendMessageButtonProps } from "../../types/Types";

const SendMessageButton = ({ type, disabled }: SendMessageButtonProps) => {
  return (
    <div className="text-center">
      <button
        type={type || "submit"}
        className={`${
          disabled
            ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
            : "bg-orange-600  hover:bg-orange-800 cursor-pointer"
        } text-zinc-200 rounded-sm  px-2 py-2 w-full text-md font-medium transition duration-300 ease-in-out`}
        disabled={disabled}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.56 122.88"
          className="w-[22px] fill-white"
        >            
          <defs>
            <style>.cls-1</style>
          </defs>
          <path
            className="cls-1"
            d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
          />
        </svg>
      </button>
    </div>
  );
};
export default SendMessageButton;
