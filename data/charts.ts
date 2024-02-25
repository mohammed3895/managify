export const ChartOptions = {
  options: {
    chart: {
      id: "chart",
    },
    stacked: true,
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "24px",
        endingShape: "rounded",
      },
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7],
    },
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
    {
      name: "Series 3",
      data: [0.8, 0.9, 1.2, 1.1, 0.8, 1.9, 2.1],
    },
  ],
};
