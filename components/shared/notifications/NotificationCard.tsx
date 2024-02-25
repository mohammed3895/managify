import React from "react";

interface NotificationProps {
  notification: {
    title: string;
    body: string;
  };
}

const NotificationCard = ({ notification }: NotificationProps) => {
  return (
    <div className="w-full border-b flex-col-start gap-2 p-4 bg-white">
      <h1 className="text-lg font-semibold tracking-tight capitalize text-zinc-900">
        {notification.title}
      </h1>
      <p className="text-sm font-normal tracking-tight capitalize text-zinc-800">
        {notification.body}
      </p>
    </div>
  );
};

export default NotificationCard;
