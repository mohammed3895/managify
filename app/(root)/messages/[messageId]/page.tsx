import ChatScreen from "@/components/messages/ChatScreen";
import { Chats } from "@/constants/users";
import { cn } from "@/lib/utils";
import React from "react";

interface ParamsProps {
  params: { messageId: number };
}

const ChatScreenPage = async ({ params }: ParamsProps) => {
  const { messageId } = params;
  const chat = Chats.find((id) => Number(id) === Number(messageId));
  const messages = chat?.messages;

  return <ChatScreen messageId={messageId} />;
};

export default ChatScreenPage;
