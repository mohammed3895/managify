import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MessageCardProps {
  username: string;
  userPhoto: string;
  id: number;
  messages?: { text: string; isMe: boolean }[];
  handleClick: () => void;
}

const MessageCard = ({
  username,
  userPhoto,
  messages,
  id,
  handleClick,
}: MessageCardProps) => {
  return (
    <Link
      href={`/messages/${id}`}
      className="w-full flex-col-start px-3 py-5 rounded-md cursor-pointer border-b last:border-none hover:bg-gray-50 transition-colors"
      onClick={handleClick}
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
          className="text-base text-zinc-900 capitalize font-semibold tracking-tight"
          aria-label={username}
        >
          {username}
        </h1>
      </div>
      {messages?.slice(-1).map((message, i) => (
        <p
          key={i}
          className="mt-2 text-sm font-normal text-muted-foreground line-clamp-1"
        >
          {message.text}
        </p>
      ))}
    </Link>
  );
};

export default MessageCard;
