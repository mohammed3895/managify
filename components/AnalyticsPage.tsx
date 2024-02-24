import { Analytics } from "@/constants/analytics";
import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="flex items-center justify-between gap-8 w-full">
      {Analytics.map((item, i) => (
        <div
          key={i}
          className={`w-full p-6 rounded-lg  flex flex-col items-start gap-4`}
          style={{ backgroundColor: item.background }}
        >
          <h1 className="text-lg uppercase font-bold tracking-wide text-white">
            {item.category}
          </h1>
          <span className="text-2xl font-normal text-gray-50">
            {item.total}
          </span>
          <p className="text-sm font-normal tracking-wide text-gray-200">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsPage;
