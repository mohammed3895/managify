import {
  CircleUserRound,
  MessagesSquare,
  Trello,
  User,
  Users,
} from "lucide-react";

export const Tabs = [
  {
    title: "Dashboard",
    href: "/",
    icon: Trello,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Messages",
    href: "/messages/1",
    icon: MessagesSquare,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: CircleUserRound,
  },
];
