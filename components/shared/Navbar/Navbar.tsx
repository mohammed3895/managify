import React from "react";
import RightNavItems from "./LeftNavItems";
import LeftNavItems from "./RightNavItems";

const Navbar = () => {
  return (
    <div className="ml-[var(--sidebar-width)] p-4 flex items-center w-[calc(100% - var(--sidebar-width))]">
      <div className="p-6 h-12 rounded-lg flex-row-between hidden lg:flex w-full">
        <RightNavItems />
        <LeftNavItems />
      </div>
    </div>
  );
};

export default Navbar;
