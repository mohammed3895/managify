import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import React from "react";

const LeftNavItems = () => {
  return (
    <div className="flex-row-center gap-4">
      <div className=" rounded-full flex-row-center gap-3 relative">
        <Search size={18} className="text-gray-500 text-sm absolute left-4" />
        <Input
          type="text"
          placeholder="Search..."
          className="w-[290px] bg-transparent pl-12 text-sm font-medium text-gray-800 rounded-full"
        />
      </div>
    </div>
  );
};

export default LeftNavItems;
