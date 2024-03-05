import { UserList } from "@/constants/users";
import React from "react";
import ConnectionCard from "./ConnectionCard";

const ConnectionsPage = () => {
  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {UserList.map((user, i) => (
        <ConnectionCard key={i} user={user} />
      ))}
    </div>
  );
};

export default ConnectionsPage;
