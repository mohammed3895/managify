import { UserButton } from "@clerk/nextjs";
import React from "react";
import Notifications from "../notifications/Notifications";

const RightNavItems = () => {
  return (
    <div className="flex-row-center gap-6">
      <Notifications />
      <UserButton />
    </div>
  );
};

export default RightNavItems;
