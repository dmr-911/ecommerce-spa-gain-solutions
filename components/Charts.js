import React from "react";
import { useFilterContext } from "@/context/FilterContextProvider";
import { Chart } from "react-google-charts";

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
  const optionsPie = {
    colors: ["#0095A0", "#84AF27", "#FFC239"],
  };

  // data bar chart
  const dataBar = [
    ["", "", "", ""],
    ["Official", 0, all_products?.filter((p) => p.official_warranty).length, 0],
    [
      "Unofficial",
      0,
      all_products?.filter((p) => p.unofficial_warranty).length,

      0,
    ],
    [
      "Without Warranty",
      0,
      all_products?.filter((p) => p.no_warranty).length,

      0,
    ],
    ["Used", 0, all_products?.filter((p) => p.used_phone).length, 0],
  ];

  const optionsBar = {
    colors: ["#0095A0"],
  };

  return (
    <div className="default-margin mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {/* Pie chart */}
      <div>
        <p className="text-[#575757] text-2xl font-bold leading-9 my-4 md:my-9">
          Sources
        </p>
        <Chart
          chartType="PieChart"
          data={dataPie}
          width={"100%"}
          height={"400px"}
          options={optionsPie}
        />
      </div>
      {/* Bar chart */}
      <div>
        <p className="text-[#575757] text-2xl font-bold leading-9 my-4 md:my-9">
          Conditions
        </p>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={dataBar}
          options={optionsBar}
        />
      </div>
    </div>
  );
};

export default Charts;
