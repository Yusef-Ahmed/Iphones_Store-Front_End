import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ positive, negative }) => {
  if (positive + negative > 0) {
    positive = +((positive / (positive + negative)) * 100).toFixed(1);
    negative = +((negative / (positive + negative)) * 100).toFixed(1);
  } else {
    positive = 50;
    negative = 50;
  }

  const [state, setState] = useState({
    series: [positive, negative],
    options: {
      chart: {
        width: 380,
        type: "pie",
        background: "#fff",
        toolbar: {
          show: false,
        },
      },
      labels: ["Positive", "Negative"],
      colors: ["#00E396", "#FF4560"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "16px",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
    },
  });

  return (
    <div className="chart-container bg-white rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Reviews Distribution
      </h2>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
};

export default ApexChart;
