"use client";
import { ChartOptions } from "@/data/charts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="w-full h-[75vh] lg:w-[70%] p-8 bg-white dark:bg-zinc-900 rounded-xl hover:shadow-lg transition-shadow flex-col-between gap-10">
      <div>
        <h1 className="mt-2 text-base capitalize font-semibold text-zinc-900">
          Audience Overview
        </h1>
        <p className="mt-1 mb-4 text-sm font-normal text-zinc-800">
          Follow ers and impressions by month.
        </p>
      </div>
      <div className="pt-6 w-full h-full">
        <ReactApexChart
          options={ChartOptions}
          series={ChartOptions.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default BarChart;
