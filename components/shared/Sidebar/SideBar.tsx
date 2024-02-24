"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Tabs } from "@/constants/TabsList";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-white border-r w-60 h-screen fixed p-6 flex flex-col items-start justify-between">
      {/* TAB LIST */}
      <div className="w-full flex flex-col gap-4 text-base font-medium leading-5 text-gray-700">
        <Logo />
        {Tabs.map((tab) => {
          const isActiveTab = tab.href === pathname;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "w-full flex items-center justify-start gap-3 p-3 rounded-lg text-lg font-semibold text-zinc-900 hover:text-white hover:bg-primary transition-colors",
                { "bg-primary text-white": isActiveTab }
              )}
            >
              <tab.icon />
              {tab.title}
            </Link>
          );
        })}
      </div>
      <UserButton />
    </aside>
  );
};

export default SideBar;
