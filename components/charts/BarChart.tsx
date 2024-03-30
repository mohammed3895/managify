"use client";
import { ChartOptions } from "@/data/charts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="w-full h-[75vh] lg:w-[70%] p-8 bg-white dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow ease-in-out duration-500 flex-col-between gap-10">
      <div>
        <h1 className="mt-2 text-base capitalize font-semibold text-zinc-900 dark:text-white">
          Audience Overview
        </h1>
        <p className="mt-1 mb-4 text-sm font-normal text-zinc-800 dark:text-gray-200">
          Follow ers and impressions by month.
        </p>
      </div>
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={ChartOptions}
          series={ChartOptions.series}
          height={350}
          type="area"
          className="pt-6 w-full h-full"
        />
      )}
    </div>
  );
};

export default BarChart;
