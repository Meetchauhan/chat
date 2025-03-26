import { ChatInputType } from "../../types/Types";

const ChatInput = ({
  name,
  // type,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: ChatInputType) => {
  return (
    <div className="w-full leading-0">
      <textarea
        name={name}
        // type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="text-zinc-200 border-[1px] shadow-lg focus:shadow-orange-600/20  leading-[1.3] border-orange-600 rounded-4xl text-md px-4 py-2 h-[40px] w-full focus:outline-0 overflow-hidden break-words whitespace-pre-wrap"
      />
    </div>
  );
};
export default ChatInput;
