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
      <SheetContent>
        <SideBar isMobile={true} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
