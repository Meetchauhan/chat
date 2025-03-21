import { ChangeEvent, ReactNode } from "react";
import { Socket } from "socket.io-client";

export interface LayoutProp {
  children: ReactNode;
}

export interface RegistrationFormType {
  label: string | "";
  name: string | "";
  type: string | "";
  placeholder: string | "";
  value: string | number | undefined | "";
  error: string | boolean | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ChatInputType {
  name: string | "";
  type: string | "";
  placeholder: string | "";
  value: string | number | undefined | "";
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export interface ButtonProps {
  type: "button" | "reset" | "submit";
  title: string | "";
  disabled: boolean;
}

export interface SendMessageButtonProps {
  type: "button" | "reset" | "submit";
  disabled: boolean;
}

export interface UserRegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface RegisterUserState {
  loading: boolean;
  data: unknown;
  error: null | string | undefined;
}

export interface SendOtpPayload {
  email: string | null;
}

export interface SendOtpState {
  loading: boolean;
  sendOtpState: {
    success?: boolean;
    message?: string;
  } | null;
  verifyOtpState: {
    success?: boolean;
    message?: string;
  } | null;

  error: null | string | undefined;
  socket: typeof Socket | null;
  onlineUsers: string[] | null;
}

export interface VerifyOtp {
  otp: number | string;
}

export interface ToastErrorArg {
  state: boolean | undefined;
  errorMessage: string | undefined;
}

export interface GetMessageType {
  chat: {
    messages: {
      map(
        arg0: (item: ChatType) => import("react/jsx-runtime").JSX.Element
      ): ReactNode;
      message: [];
    };
  };
}

export interface MessageType {
  success: boolean;
  message: {
    _id: string;
    senderId: string;
    receiverId: string;
    text: string;
    createdAt: string;
  };
}
export interface UsersInitialState {
  messages: MessageType[];
  userLoading: boolean;
  messageLoading: boolean;
  users: {
    success?: boolean;
    data?: [];
  } | null;
  selectedUser: {
    firstName: string;
    lastName: string;
  } | null;
  error: string | null;
}

export interface ProfileInitialState {
  loading: boolean;
  data: {
    success?: boolean;
    data: {
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      _id: string;
    };
  } | null;
  error: string | null;
}

export interface UsersItemType {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface UsersListType {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface SendMessagePayload {
  text: string;
  selectedUserId: string;
}

export interface ChatType {
  _id: string;
  text: string;
  createdAt: string;
  senderId: string;
  recieverId: string;
}

export interface SubscribeToMessageType {
  dispatch: () => void;
  socket: typeof Socket | null;
  selectedUserId: string;
}

export interface Message {
  recieverId: string;
  senderId: string;
  success: boolean;
  message: {
    _id: string;
    senderId: string;
    receiverId: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface UsersSliceInitialState {
  data: {
    success: boolean;
    data: [];
  } | null;
  loading: boolean;
  error: null | string;
}

export interface FindUsersType {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface SendRequestSliceInitialState {
  data: {
    success: boolean;
    data: [];
  } | null;
  loading: boolean;
  error: null | string;
}
export interface AcceptRequestSliceInitialState {
  data: {
    success: boolean;
    data: [];
  } | null;
  loading: boolean;
  error: null | string;
}