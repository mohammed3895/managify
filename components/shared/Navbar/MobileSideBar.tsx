import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import SideBar from "../Sidebar/SideBar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-zinc-800">
        <SideBar isMobile={true} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
