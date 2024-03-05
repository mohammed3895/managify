import ChatScreen from "@/components/messages/ChatScreen";
import React from "react";

interface ParamsProps {
  params: { messageId: number };
}

const ChatScreenPage = async ({ params }: ParamsProps) => {
  const { messageId } = params;

  return <ChatScreen messageId={messageId} />;
};

export default ChatScreenPage;
