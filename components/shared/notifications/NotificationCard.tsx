import React from "react";

interface NotificationProps {
  notification: {
    title: string;
    body: string;
  };
}

const NotificationCard = ({ notification }: NotificationProps) => {
  return (
    <div className="w-full border-b flex-col-start gap-2 p-4 bg-white dark:bg-zinc-700">
      <div className="flex-center-between">
        <h1 className="text-base font-semibold tracking-tight capitalize text-zinc-900">
          {notification.title}
        </h1>
      </div>
      <p className="text-sm font-normal tracking-tight text-zinc-800">
        {notification.body}
      </p>
    </div>
  );
};

export default NotificationCard;
