import { UserButton } from "@clerk/nextjs";
import React from "react";
import Notifications from "../notifications/Notifications";
import { ToggleTheme } from "@/components/ToggleTheme";

const RightNavItems = () => {
  return (
    <div className="flex-row-center gap-6">
      <ToggleTheme />
      <Notifications />
      <UserButton />
    </div>
  );
};

export default RightNavItems;
