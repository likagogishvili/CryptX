import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
function CoinsChart(props) {
  return (
    <div className="chart">
      <Line
        data={{
          labels: ["circ", "total", "max"],
          datasets: [
            {
              data: [
                props.data.circulating_supply,
                props.data.total_supply,
                props.data.max_supply,
              ],
              backgroundColor: ["#92C63B", "#4CAF4F", "#027F5E"],
              borderColor: ["green"],
            },
          ],
        }}
        height="50%"
        width="50%"
        options={{
          plugins: {
            legend: {
              labels: {
                font: {
                  size: "7%",
                },
              },
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                font: {
                  size: "6.9%",
                },
                display: false,
              },
              beginAtZero: false,
            },
            x: {
              ticks: {
                font: {
                  size: "6.9%",
                },
              },
              beginAtZero: false,
              grid: {
                drawOnCHartArea: false,
                display: false,
                drawBorder: false,
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default CoinsChart;
