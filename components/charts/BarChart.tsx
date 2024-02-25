"use client";
import { ChartOptions } from "@/data/charts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="w-fit p-8 bg-white rounded-lg">
      <ReactApexChart
        options={ChartOptions.options}
        series={ChartOptions.series}
        type="bar"
        width={700}
        height={500}
      />
    </div>
  );
};

export default BarChart;
