"use client";
import ReactApexChart from "react-apexcharts";
import { LineChartOptions } from "@/data/charts";

const ActiveUsers = () => {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-zinc-800 flex flex-col hover:shadow-lg transition-shadow ease-in-out duration-500 items-start w-full h-fit lg:w-[33%]">
      <h1 className="mt-2 text-base capitalize font-semibold text-zinc-900 dark:text-white">
        Customers
      </h1>
      <p className="mt-1 mb-4 text-sm font-normal text-zinc-800 dark:text-gray-300">
        Find how many customers visited you website.
      </p>

      <div className="w-full mt-[5rem] flex-row-center">
        <ReactApexChart
          options={LineChartOptions}
          series={LineChartOptions.series}
          type="radialBar"
          width={450}
        />
      </div>
    </div>
  );
};

export default ActiveUsers;
