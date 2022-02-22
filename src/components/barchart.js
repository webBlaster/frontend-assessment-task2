import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ year, count }) => {
  return (
    <>
      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: year,
          datasets: [
            {
              label: "Total Awards",

              data: count,
              // Color of each bar
            },
          ],
        }}
        // Height of graph
      />
    </>
  );
};

export default BarChart;
