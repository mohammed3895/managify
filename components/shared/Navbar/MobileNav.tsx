import React from "react";
import RightNavItems from "./RightNavItems";
import MobileSideBar from "./MobileSideBar";

const MobileNav = () => {
  return (
    <div className="w-full h-16 lg:hidden flex items-center justify-between ">
      <MobileSideBar />
      <RightNavItems />
    </div>
  );
};

export default MobileNav;
