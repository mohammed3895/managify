"use client";
import { Chats } from "@/constants/users";
import React, { useState } from "react";
import MessageCard from "./MessageCard";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SendersList = ({ isMobile }: { isMobile?: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-1/3 p-8 hidden lg:flex-col-start bg-white rounded-lg min-h-[85vh]",
        { "flex flex-col w-full p-2": isMobile }
      )}
    >
      <h1 className="tex-xl font-bold text-zinc-900 mb-4">Inbox</h1>
      {Chats.map((message) => {
        const isOpen = pathname === `/messages/${message.id}`;
        return (
          <MessageCard
            isOpen={isOpen}
            key={message.id}
            id={message.id}
            username={message.sender.name}
            userPhoto={message.sender.avatar}
            messages={message.messages}
          />
        );
      })}
    </div>
  );
};

export default SendersList;
