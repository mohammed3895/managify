import { LineChartOptions } from "@/data/charts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ActiveUsersCardProps {
  time: string;
  total: string;
}

const ActiveUsersCard = ({ time, total }: ActiveUsersCardProps) => {
  return (
    <div className="flex-col-center gap-4 py-6">
      <h1 className="text-base font-bold capitalize text-muted-foreground">
        {time}
      </h1>
      <p className="text-2xl font-bold capitalize text-zinc-800">{total}</p>
    </div>
  );
};

export default ActiveUsersCard;
