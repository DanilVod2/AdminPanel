import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  barPercentage: 0.5,

  scales: {
    y: {
      grid: {
        offset: true,
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: false,
    // title: {
    //   display: true,
    //   text: "Chart.js Horizontal Bar Chart",
    // },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40],
      borderColor: ["#B558F6", "#29CB97", "#FEC400", "#4072EE"],
      backgroundColor: ["#B558F6", "#29CB97", "#FEC400", "#4072EE"],
      borderRadius: 50,
      borderDashOffset: 5,
      barThickness: 6,
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
