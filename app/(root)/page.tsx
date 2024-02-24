import AnalyticsPage from "@/components/AnalyticsPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-between gap-10">
      <AnalyticsPage />
    </div>
  );
}
