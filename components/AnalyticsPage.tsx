import { Analytics } from "@/constants/analytics";
import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center flex-wrap justify-between gap-4 w-full">
      {Analytics.map((item, i) => (
        <div
          key={i}
          className={`w-full lg:w-[300px] px-6 py-12 bg-white dark:bg-zinc-700 rounded-xl  flex items-center gap-8`}
        >
          <item.icon
            className="text-5xl w-12 h-12 text-white"
            style={{ color: item.background }}
          />
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-xs mb-2 uppercase font-bold tracking-wide text-muted-foreground">
              {item.category}
            </h1>
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">
              {item.total}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsPage;
