import { ApexOptions } from "apexcharts";

export const ChartOptions: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  stroke: {
    curve: "smooth",
  },
  plotOptions: {
    area: {
      fillTo: "end",
    },
  },
  theme: {
    palette: "palette4",
    mode: "light",
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ],

  fill: {
    type: "gradient",
    gradient: {
      colorStops: [
        {
          offset: 0,
          color: "#0ae2e9",
          opacity: 1,
        },
        {
          offset: 0.6,
          color: "#0ae2e99c",
          opacity: 50,
        },
        {
          offset: 100,
          color: "#0aaae918",
          opacity: 1,
        },
      ],
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
    ],
  },
};

export const LineChartOptions: ApexOptions = {
  chart: {
    type: "radialBar",
    selection: {
      type: "pie",
      stroke: {
        dashArray: 4,
        width: 4,
        color: "#FFF",
        opacity: 0.5,
      },
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  theme: {
    palette: "palette1",
  },
  stroke: {
    lineCap: "round",
    width: 5,
  },
  dataLabels: {
    background: {
      borderColor: "#FEFEFE",
      padding: 4,
      foreColor: "#FEFEFE",
    },
  },
  plotOptions: {
    radialBar: {
      track: {
        show: true,
        strokeWidth: "4px",
        background: "#EDEFF2",
      },
      hollow: {
        margin: 5,
      },
      barLabels: {
        useSeriesColors: true,
        margin: 4,
      },
      dataLabels: {
        show: true,
        total: {
          show: true,
          label: "TOTAL",
          fontSize: "22px",
          color: "#008FFB",
        },
        value: {
          color: "#C4BBAF",
          fontSize: "18px",
        },
      },
    },
  },
  legend: { show: false },
  yaxis: {
    show: false,
  },
  colors: ["#35CB89", "#F1C047", "#DB12FA"],
  series: [87, 55, 74],
  labels: ["MEN", "WOMEN", "KIDS"],
};
