"use client";
import { ActiveUsersData } from "@/constants/users";
import ActiveUsersCard from "./ActiveUsersCard";
import ReactApexChart from "react-apexcharts";
import { LineChartOptions } from "@/data/charts";

const ActiveUsers = () => {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-zinc-700 flex flex-col hover:shadow-lg transition-shadow items-start w-full h-[75vh] lg:w-[33%]">
      <h1 className="mt-2 text-base capitalize font-semibold text-zinc-900 dark:text-white">
        Active Users
      </h1>
      <p className="mt-1 mb-4 text-sm font-normal text-zinc-800 dark:text-gray-300">
        Find how many users visited you website.
      </p>

      <div className="flex-row-between w-full mt-8 gap-6">
        {ActiveUsersData.map((activity, i) => (
          <ActiveUsersCard
            key={i}
            time={activity.time}
            total={activity.total}
          />
        ))}
      </div>

      <div className="w-full mt-[5rem] flex-row-center">
        <ReactApexChart
          options={LineChartOptions}
          series={LineChartOptions.series}
          type="donut"
          width={300}
        />
      </div>
    </div>
  );
};

export default ActiveUsers;
