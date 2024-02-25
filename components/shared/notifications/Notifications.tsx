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
        <div className="rounded-full flex-row-center bg-accent p-2 cursor-pointer">
          <Bell size={18} className=" text-primary text-sm" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex-col-center gap-2 w-[300px]">
        {IncomingNotifications.map((notification, i) => (
          <NotificationCard key={i} notification={notification} />
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
