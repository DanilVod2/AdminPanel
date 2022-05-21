import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  bezierCurve: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "График суммы продаж за месяц",
    },
  },
};

const labels = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Продукты",
      data: [25, 30, 20, 50, 30, 25, 30, 20, 50, 30, 23, 12].map(
        (el) => el * 1000
      ),
      borderColor: "#4072EE",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.5,
    },
    {
      label: "Услуги",
      data: [40, 10, 30, 25, 40, 40, 10, 30, 25, 40, 23, 18].map(
        (el) => el * 1000
      ),
      borderColor: "#E5E9F2",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.5,
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
