import { useFormik } from "formik";
import ChatInput from "../formComponents/ChatInput";
import SendMessageButton from "../formComponents/SendMessageButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addMessage, getMessages, sendMessage } from "../../features/ChatSlice";
import useSelectedUser from "../../customHooks/useSelectedUser";
import { useProfile } from "../../customHooks/useProfile";
import {  saveMessage } from "../../db/db";
import { v4 as uuidv4 } from "uuid"; // ✅ Ensures unique ID for offline messages

const SendMessage = () => {
  const selectedUser = useSelectedUser();
  const profile = useProfile();
  const dispatch = useDispatch<AppDispatch>();

  const initialValue = { chat: "" };

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValue,
    onSubmit: async (value) => {
      if (!selectedUser || !profile?.data?._id || !value?.chat.trim()) return;

      const messagePayload = {
        _id: uuidv4(), // ✅ Unique ID to avoid reprocessing
        senderId: profile?.data?._id,
        recieverId: selectedUser?._id, // ✅ Fixed spelling mistake
        text: value?.chat.trim(), // ✅ Prevent empty or whitespace messages
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0,
        success: false,
        senderFirstName: profile?.data?.firstName
      };

      if (!navigator.onLine) {
        await saveMessage(messagePayload); // ✅ Save offline
        dispatch(addMessage(messagePayload)); // ✅ Update UI immediately
        resetForm();
        return;
      }

      // Normal online send
      const send = await dispatch(
        sendMessage({
          selectedUserId: selectedUser?._id,
          text: messagePayload.text,
          loggedinUserId: profile?.data?._id,
          senderFirstName: profile?.data?.firstName
        })
      );

      if (send?.payload?.success) {
        dispatch(getMessages(selectedUser?._id)); // ✅ No `await` needed
      }

      resetForm(); // ✅ Reset form to prevent stale message
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && values?.chat.trim().length > 0) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative z-10 px-5 md:px-10"
    >
      <div className="flex items-center justify-center w-full gap-5 py-4">
        <ChatInput
          type="text"
          name="chat"
          placeholder="Type..."
          value={values.chat}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <SendMessageButton
          type="submit"
          disabled={values?.chat.trim().length < 1}
        />
      </div>
    </form>
  );
};

export default SendMessage;
