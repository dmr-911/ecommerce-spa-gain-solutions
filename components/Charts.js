import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

import { Chart } from "react-google-charts";
import { useFilterContext } from "@/context/FilterContextProvider";

const Charts = () => {
  const { all_products } = useFilterContext();

  // data for pie chart
  const dataPie = [
    ["Task", "Hours per Day"],
    [
      "Daraz",
      all_products?.filter((product) =>
        product.seller_name.toLowerCase().includes("daraz")
      ).length,
    ],
    [
      "Bikroy",
      all_products?.filter((product) =>
        product.seller_name.toLowerCase().includes("bikroy")
      ).length,
    ],
    [
      "Pickaboo",
      all_products?.filter((product) =>
        product.seller_name.toLowerCase().includes("pickaboo")
      ).length,
    ],
  ];

  // data bar chart
  const data = [
    {
      name: "Official",
      uv: 4000,
      pv: all_products?.filter((p) => p.official_warranty).length,
      amt: 2400,
    },
    {
      name: "Unofficial",
      uv: 3000,
      pv: all_products?.filter((p) => p.unofficial_warranty).length,
      amt: 2210,
    },
    {
      name: "Without Warranty",
      uv: 2000,
      pv: all_products?.filter((p) => p.no_warranty).length,
      amt: 2290,
    },
    {
      name: "Used",
      uv: 2780,
      pv: all_products?.filter((p) => p.used_phone).length,
      amt: 2000,
    },
  ];
  return (
    <div className="default-margin mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pie chart */}
      <div>
        <p className="text-[#575757] text-2xl font-bold leading-9 my-9">
          Sources
        </p>
        <Chart
          chartType="PieChart"
          data={dataPie}
          width={"100%"}
          height={"400px"}
        />
      </div>
      {/* Bar chart */}
      <div>
        <p className="text-[#575757] text-2xl font-bold leading-9 my-9">
          Conditions
        </p>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 40, right: 40 }}
          />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#0095A0" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
