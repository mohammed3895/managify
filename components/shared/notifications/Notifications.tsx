import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";
import NotificationCard from "./NotificationCard";

const IncomingNotifications = [
  {
    title: "John doe",
    body: "You have a new private message.",
  },
  {
    title: "Alice greek",
    body: "You have a new private message.",
  },
  {
    title: "Sara larson",
    body: "You have a new private message.",
  },
  {
    title: "PayPal",
    body: "You have a new private message.",
  },
];

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="rounded-full flex-row-center bg-white border dark:bg-zinc-800  p-2 cursor-pointer">
          <Bell size={18} className=" text-black dark:text-white w-5 h-5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex-col-start gap-2 w-[300px] bg-white dark:bg-zinc-800 rounded-xl mt-6 mr-6">
        <h1 className="text-lg capitalize font-medium text-zinc-900 dark:text-white mb-4">
          Notifications
        </h1>
        {IncomingNotifications.map((notification, i) => (
          <NotificationCard key={i} notification={notification} />
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
