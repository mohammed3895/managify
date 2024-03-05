import { Chats } from "@/constants/users";
import { cn } from "@/lib/utils";
import {
  ImagePlus,
  Menu,
  MessageSquare,
  Mic,
  PhoneCall,
  SendHorizonal,
  Video,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import MobileChatScreen from "./MobileChatScreen";

interface ParamsProps {
  messageId: number;
}

const ChatScreen = async ({ messageId }: ParamsProps) => {
  const chat = Chats[messageId - 1];

  return (
    <div className="w-full h-full rounded-xl  min-h-[85vh] bg-white dark:bg-zinc-700 flex flex-col justify-between">
      <MobileChatScreen />
      <div className="flex-row-between border-b sticky px-6 py-3">
        <div className="flex items-center justify-start gap-3 p-4">
          <Image
            src={chat.sender.avatar}
            alt={chat.sender.name}
            width={100}
            height={100}
            className="w-12 h-12 rounded-2xl"
          />
          <h3 className="text-lg font-bold capitalize text-zinc-900 dark:text-white">
            {chat.sender.name}
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border flex items-center justify-center">
            <Video size={24} className="text-muted-foreground" />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border flex items-center justify-center">
            <PhoneCall size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      <ScrollArea className="w-full h-[65vh] flex flex-col gap-6 p-6 overflow-hidden">
        {chat.messages.map((message, i) => {
          return (
            <div
              key={i}
              className={cn("flex flex-col items-start justify-start gap-8", {
                "items-end": message.isMe,
              })}
            >
              <p
                className={cn("px-6 py-4 rounded-full bg-accent my-4 w-3/4", {
                  "bg-purple-300": message.isMe,
                })}
              >
                {message.text}
              </p>
            </div>
          );
        })}
      </ScrollArea>

      <div className="w-full p-6 flex items-center justify-between gap-6">
        <ImagePlus size={28} className="text-muted-foreground" />
        <Input
          className="w-full rounded-full p-4"
          placeholder="Type  a message..."
        />
        <Mic size={28} className="text-muted-foreground" />
        <SendHorizonal size={28} className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default ChatScreen;
