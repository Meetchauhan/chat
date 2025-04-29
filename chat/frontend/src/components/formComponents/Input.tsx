import {  RegistrationFormType } from "../../types/Types";

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: RegistrationFormType) => {
  return (
    <div className="mb-2.5 h-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-xl font-medium mb-1 text-zinc-200"
        >
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus
        className="text-zinc-200 border-2 border-white rounded-sm text-md p-2 w-full focus:outline-0"
      />
      <p className="text-red-700">{error}</p>
    </div>
  );
};
export default Input;
