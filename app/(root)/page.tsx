"use client";
import AnalyticsPage from "@/components/AnalyticsPage";
import ActiveUsers from "@/components/charts/ActiveUsers";
import BarChart from "@/components/charts/BarChart";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-between gap-10 p-4 rounded-xl w-full h-max">
      <AnalyticsPage />
      <div className="flex flex-col lg:flex-row items-start justify-start gap-8 w-full h-max">
        <BarChart />
        <ActiveUsers />
      </div>
    </div>
  );
}
