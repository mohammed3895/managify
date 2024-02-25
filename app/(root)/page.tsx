import AnalyticsPage from "@/components/AnalyticsPage";
import BarChart from "@/components/charts/BarChart";
import { ChartOptions } from "@/data/charts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-between gap-10 bg-accent p-4 rounded-xl">
      <AnalyticsPage />
      <BarChart />
    </div>
  );
}
