import React from "react";
import RightNavItems from "./LeftNavItems";
import LeftNavItems from "./RightNavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="lg:ml-[var(--sidebar-width)] ml-0 sticky z-50 inset-x-0 top-0 px-4 flex items-center w-[calc(100% - var(--sidebar-width))] bg-white dark:bg-zinc-900">
      <MobileNav />
      <div className="p-6 h-16 rounded-lg flex-row-between hidden lg:flex w-full">
        <RightNavItems />
        <LeftNavItems />
      </div>
    </header>
  );
};

export default Navbar;
