import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Mail, UserCheck, UserCheck2, UserPlus2 } from "lucide-react";

interface UserProps {
  user: {
    name: string;
    role: string;
    photoUrl: string;
    connected: boolean;
    analytics: any[];
  };
}

const ConnectionCard = ({ user }: UserProps) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-8 rounded-xl flex flex-col items-center justify-center gap-1 border hover:border-none hover:shadow-lg transition-all">
      <Image
        src={user.photoUrl}
        alt=""
        width={150}
        height={150}
        className="w-20 h-20 rounded-full"
      />
      <h3 className="text-lg font-bold capitalize text-gray-900 dark:text-white mt-3">
        {user.name}
      </h3>
      <p className="text-sm capitalize text-muted-foreground font-medium dark:text-gray-400">
        {user.role}
      </p>
      <div className="w-full p-6 flex items-center justify-between">
        {user.analytics.map((analytic, i) => (
          <div
            className="mt-4 flex flex-col items-center justify-center gap-1"
            key={i}
          >
            <h1 className="text-xl font-bold text-primary">{analytic.value}</h1>
            <p className="text-sm font-medium text-muted-foreground capitalize">
              {analytic.label}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between gap-6 mt-5">
        <Button className="w-full flex items-center justify-center gap-2">
          {user.connected ? (
            <UserCheck2 className="w-5 h-5 text-gray-50" />
          ) : (
            <UserPlus2 className="w-5 h-5 text-gray-50" />
          )}
          {user.connected ? "Connected" : "Connect"}
        </Button>
        <Button
          className="w-full flex items-center justify-center gap-2 bg-transparent"
          variant="outline"
        >
          <Mail className="w-5 h-5 text-muted-foreground" />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ConnectionCard;
