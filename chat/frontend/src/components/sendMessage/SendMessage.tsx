import { useFormik } from "formik";
import ChatInput from "../formComponents/ChatInput";
import SendMessageButton from "../formComponents/SendMessageButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getMessages, sendMessage } from "../../features/ChatSlice";
import useSelectedUser from "../../customHooks/useSelectedUser";

const SendMessage = () => {
  const selectedUser = useSelectedUser();
  const dispatch = useDispatch<AppDispatch>();

  const initialValue = {
    chat: "",
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: async (value, action) => {
      const send = await dispatch(
        sendMessage({
          selectedUserId: selectedUser?._id,
          text: value?.chat,
        })
      );
      // dispatch(getMessages(selectedUser?._id));
      if (send?.payload?.success) {
        await dispatch(getMessages(selectedUser?._id));
        action.resetForm();
      }
    },
  });
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && values?.chat.trim().length > 0) {
      e.preventDefault(); // Prevent new line submission
      handleSubmit(); // Submit the message
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full relative z-10 px-10">
      <div className=" flex items-start justify-center w-full gap-5 py-4">
        <ChatInput
          type="text"
          name="chat"
          placeholder="Type..."
          value={values.chat}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <SendMessageButton type="submit" disabled={values?.chat?.length < 1} />
      </div>
    </form>
  );
};
export default SendMessage;
