"use client";
import { Chats } from "@/constants/users";
import React, { useState } from "react";
import MessageCard from "./MessageCard";

const SendersList = () => {
  const [id, setId] = useState(0);

  return (
    <div className="w-1/3 p-8 flex-col-start bg-white rounded-lg min-h-[85vh]">
      <h1 className="tex-xl font-bold text-zinc-900 mb-4">Inbox</h1>
      {Chats.map((message) => (
        <MessageCard
          key={message.id}
          id={message.id}
          username={message.sender.name}
          userPhoto={message.sender.avatar}
          messages={message.messages}
          handleClick={() => setId(message.id)}
        />
      ))}
    </div>
  );
};

export default SendersList;
