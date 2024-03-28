"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MessageCardProps {
  username: string;
  userPhoto: string;
  isOpen: boolean;
  id: number;
  messages?: { text: string; isMe: boolean; time: string }[];
}

const MessageCard = ({
  username,
  userPhoto,
  messages,
  isOpen,
  id,
}: MessageCardProps) => {
  return (
    <Link
      href={`/messages/${id}`}
      className={cn(
        "w-full flex-col-start px-3 py-5 my-1 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",
        { "bg-gray-50 dark:bg-gray-600": isOpen }
      )}
    >
      <div className="flex-row-start gap-4">
        <Image
          src={userPhoto}
          alt={username}
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
        />
        <h1
          className="text-base text-zinc-900 dark:text-white capitalize font-semibold tracking-tight"
          aria-label={username}
        >
          {username}
        </h1>
      </div>
      {messages?.slice(-1).map((message, i) => (
        <p
          key={i}
          className="mt-2 text-sm font-normal text-muted-foreground dark:text-gray-200 line-clamp-1 w-3/4"
        >
          {message.text} <span className="">{message.time}</span>
        </p>
      ))}
    </Link>
  );
};

export default MessageCard;
