import { ButtonProps } from "../../types/Types";

const Button = ({ type, title, disabled }: ButtonProps) => {
  return (
    <div className="text-center">
      <button
        type={type || "submit"}
        className={`${
          disabled
            ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
            : "bg-orange-600  hover:bg-gray-900 cursor-pointer"
        } text-zinc-200 rounded-sm  px-2 py-2 w-full text-md font-medium transition duration-300 ease-in-out`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};  
export default Button;
