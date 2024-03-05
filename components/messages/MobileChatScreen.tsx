import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import SendersList from "./SendersList";

const MobileChatScreen = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-4 rounded-lg block lg:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SendersList isMobile={true} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileChatScreen;
