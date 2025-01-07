import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CircleChart = ({ rates, total }) => {
  if (total) {
    rates = rates.map((rate) => ((rate / total) * 100).toFixed(2));
  }

  const [state, setState] = useState({
    series: rates.reverse(),
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: false,
            },
            style: {
              colors: ["#e2e8f0"],
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName +
                " : " +
                opts.w.globals.series[opts.seriesIndex] +
                "%"
              );
            },
          },
        },
      },
      colors: ["#3399FF", "#66CC66", "#FFD700", "#FFA500", "#FF4C4C"],
      labels: ["Excellent", "Good", "Average", "Fair", "Poor"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  return (
    <div className="chart-containe rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Ratings Breakdown
      </h2>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={390}
          width={320}
        />
      </div>
    </div>
  );
};

export default CircleChart;
