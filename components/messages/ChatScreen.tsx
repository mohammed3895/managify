import { Chats } from "@/constants/users";
import { cn } from "@/lib/utils";
import React from "react";

interface ParamsProps {
  messageId: number;
}

const ChatScreen = async ({ messageId }: ParamsProps) => {
  const messages = Chats[messageId - 1].messages;

  return (
    <div className="w-full h-full rounded-lg p-6 min-h-[85vh] bg-white">
      {messages.map((message, i) => {
        return (
          <div
            key={i}
            className={cn("flex flex-col items-start justify-start gap-4", {
              "items-end": message.isMe,
            })}
          >
            <p
              className={cn("px-6 py-4 rounded-lg bg-accent my-2 w-3/4", {
                "bg-purple-200": message.isMe,
              })}
            >
              {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
