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
import { Button } from "../ui/button";

interface ParamsProps {
  messageId: number;
}

const ChatScreen = async ({ messageId }: ParamsProps) => {
  const chat = Chats[messageId - 1];

  return (
    <div className="w-full h-full rounded-xl  min-h-[60vh] bg-white dark:bg-zinc-800 flex flex-col justify-between">
      <MobileChatScreen />
      <div className="flex-row-between border-b border-gray-50 dark:border-gray-500 sticky px-6 py-3">
        <div className="flex items-center justify-start gap-2.5">
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
          <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border flex items-center justify-center">
            <Video
              size={20}
              className="text-muted-foreground dark:text-white"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border flex items-center justify-center">
            <PhoneCall
              size={20}
              className="text-muted-foreground dark:text-white"
            />
          </div>
        </div>
      </div>

      <ScrollArea className="w-full h-[60vh] flex flex-col gap-6 p-6 overflow-hidden">
        {chat.messages.map((message, i) => {
          return (
            <div
              key={i}
              className={cn("flex flex-col items-start justify-start gap-8", {
                "items-end": message.isMe,
              })}
            >
              <p
                className={cn(
                  "px-6 py-3 rounded-xl bg-accent dark:bg-zinc-700 my-6 w-3/4",
                  {
                    "bg-primary text-white dark:bg-primary rounded-br-none":
                      message.isMe,
                  },
                  {
                    "rounded-bl-none": !message.isMe,
                  }
                )}
              >
                {message.text}{" "}
                <span className=" float-right text-xs pl-4 pt-5 text-muted-foreground">
                  {message.time}
                </span>
              </p>
            </div>
          );
        })}
      </ScrollArea>

      <div className="w-full p-6 flex items-center justify-between gap-3.5">
        <Button
          variant="secondary"
          className="rounded-2xl w-12 h-12 dark:bg-zinc-700"
        >
          <ImagePlus
            size={32}
            className="text-muted-foreground dark:text-white"
          />
        </Button>
        <Input
          className="w-full rounded-xl p-6 dark:bg-zinc-800 dark:border-zinc-700"
          placeholder="Type  a message..."
        />
        <Button
          variant="secondary"
          className="rounded-2xl w-12 h-12 dark:bg-zinc-700"
        >
          <Mic size={28} className="text-muted-foreground dark:text-white" />
        </Button>
        <Button
          variant="secondary"
          className="rounded-2xl w-12 h-12 dark:bg-zinc-700"
        >
          <SendHorizonal
            size={28}
            className="text-muted-foreground dark:text-white"
          />
        </Button>
      </div>
    </div>
  );
};

export default ChatScreen;
