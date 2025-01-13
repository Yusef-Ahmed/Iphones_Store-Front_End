import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const ColumnChart = ({ revCat }) => {
  const categori = [
    "General",
    "Mic",
    "Camera",
    "Delivery",
    "Screen",
    "Prices",
    "Efficiency",
    "Battery",
  ];
  const categories = {
    positive: categori.map((val) =>
      (
        (revCat[val]["positive"] /
        (revCat[val]["positive"] + revCat[val]["negative"])) * 100
      ).toFixed(2)
    ),
    negative: categori.map((val) =>
      (
        (revCat[val]["negative"] /
        (revCat[val]["positive"] + revCat[val]["negative"])) * 100
      ).toFixed(2)
    ),
  };
  const [state, setState] = useState({
    series: [
      {
        name: "Positive",
        data: categories.positive,
      },
      {
        name: "Negative",
        data: categories.negative,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: categori,
        labels: {
          style: {
            colors: "#e2e8f0",
            fontFamily: "cursive",
          },
        },
      },
      yaxis: {
        title: {
          text: "Percentage",
          style: {
            color: "#e2e8f0", // Set the color for y-axis title
          },
        },
        labels: {
          style: {
            colors: "#e2e8f0",
            fontFamily: "cursive",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: function (val) {
            return val + " %";
          },
        },
        style: {
          fontSize: "12px", // Customize font size
          fontFamily: "cursive", // Set a custom font
        },
      },
      colors: ["#00E396", "#FF4560"],
      legend: {
        labels: {
          colors: ["#e2e8f0", "#e2e8f0"],
        },
        fontSize: "16px",
      },
    },
  });

  return (
    <div>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={500}
          width={600}
        />
      </div>
    </div>
  );
};
