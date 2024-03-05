"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Tabs } from "@/constants/TabsList";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SideBar = ({ isMobile }: { isMobile?: boolean }) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-white dark:bg-zinc-800 border-r w-0 lg:w-[var(--sidebar-width)] h-screen fixed p-6 mt-6 lg:mt-0 hidden lg:flex flex-col items-start justify-between z-50 overflow-hidden",
        { "flex w-full": isMobile }
      )}
    >
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
                "w-full flex items-center justify-start gap-3 p-3 rounded-lg text-lg font-semibold text-zinc-900 dark:text-gray-600  hover:bg-accent transition-colors",
                {
                  "bg-accent dark:bg-gray-600 text-primary dark:text-white":
                    isActiveTab,
                }
              )}
            >
              <tab.icon />
              {tab.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
