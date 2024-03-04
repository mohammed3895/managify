import { ApexOptions } from "apexcharts";

export const ChartOptions: ApexOptions = {
  chart: {
    id: "chart",
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 0,
      },
    },
    zoom: {
      enabled: true,
      autoScaleYaxis: true,
    },
    background: "#fff",
    foreColor: "#37415a",
    stackOnlyBar: true,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "24px",
      dataLabels: { orientation: "vertical", hideOverflowingLabels: true },
      borderRadius: 5,
      distributed: false,
    },
  },
  stroke: {
    // show: true,
    width: 6,
    colors: ["transparent"],
    curve: "smooth",
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7],
  },

  series: [
    {
      name: "Series 1",
      data: [1, 1.6, 1.5, 1.1, 1.8, 1.7, 2],
    },
    {
      name: "Series 2",
      data: [0.9, 1.9, 1.6, 1.5, 1.7, 1.2, 2.5],
    },
  ],
};

export const LineChartOptions: ApexOptions = {
  chart: {
    type: "donut",

    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend: { show: false },
  yaxis: {
    show: false,
  },

  series: [1200, 11900, 32021],
};
