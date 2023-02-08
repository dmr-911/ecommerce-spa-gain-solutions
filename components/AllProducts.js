import { products } from "@/data/products";
import Image from "next/image";
import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContextProvider";

const colorClasses = [
  "border-[#DD9E10] bg-[#e0d9c7] text-[#DD9E10]",
  "border-[#874C72] bg-[#d3aac5]/70 text-[#874C72]",
  "border-[#11A0DB] bg-[#cfdfe6] text-[#11A0DB]",
  "border-[#DD9E10] bg-[#e0d9c7] text-[#DD9E10]",
  "border-[#874C72] bg-[#d3aac5]/70 text-[#874C72]",
  "border-[#11A0DB] bg-[#cfdfe6] text-[#11A0DB]",
  "border-[#11A0DB] bg-[#cfdfe6] text-[#11A0DB]",
  "border-[#DD9E10] bg-[#e0d9c7] text-[#DD9E10]",
];

const AllProducts = () => {
  const { filter_products, sorting } = useFilterContext();

  const [filterActive, setFilterActive] = useState(false);
  const [activeFilterOption, setActiveFilterOption] = useState("All Products");

  // filter option click method
  const handleOptionSelect = (option) => {
    setActiveFilterOption(option);
    setFilterActive(false);
  };

  return (
    <div className="text-[#74777B]">
      {/* Main body */}
      <main className="default-margin mx-auto">
        {/* Filter container */}
        <div className="flex justify-between">
          <p className="text-[#575757] text-2xl font-bold leading-9">
            All Products
          </p>
          <div className="flex gap-2 items-center">
            <span>Sort by : </span>
            <div className="relative">
              {/* Filter form */}
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  className={`border-2 w-[11.05rem] overflow-hidden border-[#B7B8BC] box-border hover:border-transparent ${
                    filterActive
                      ? "bg-[#0095A0] text-white border-transparent"
                      : "bg-white"
                  } hover:text-white px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-[#0095A0] transition-all duration-150`}
                  onClick={sorting}
                >
                  <option value="All Products">All Products</option>
                  <option value="Best Value">Best Value</option>
                  <option value="Best Camera">Best Camera</option>
                  <option value="Best Performance">Best Performance</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        {/* Products showing container */}
        <div className="grid-container grid grid-cols-12 my-10">
          <div className="item1 col-span-4">Model</div>
          <div className="item2 col-span-3">Ram/Rom</div>
          <div className="item2 col-span-2">Tag</div>
          <div className="item2 col-span-3 text-end">Price</div>
        </div>

        {/* Product details */}
        {filter_products.map((product, i) => (
          <div
            key={product._id}
            className="grid-container grid grid-cols-12 mb-6"
          >
            <div className="item1 col-span-4 flex gap-4">
              {/* Image section */}
              <div className="h-20 w-20 relative">
                <Image src={product.phone_images[0]} alt="phone" fill />
              </div>
              {/* Phone name and brand section */}
              <div className="flex-grow flex items-center text-left h-full">
                <div>
                  <p className="text-[#575757] font-bold w-full">
                    {product.phone_details.model}
                  </p>
                  <p className="w-full">{product.brand}</p>
                </div>
              </div>
            </div>

            {/* Ram rom section */}
            <div className="item2 col-span-3 h-full flex items-center">
              {products[0].phone_details.ram}/
              {product.phone_details.internal_storage}
            </div>

            {/* tags section */}
            <div className="item2 col-span-3 flex flex-wrap gap-1 text-xs h-auto">
              {product.speciality.map((tag, i) => (
                <span
                  key={i}
                  className={`border-2 ${colorClasses[i]} xl:h-6 rounded px-1`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price section */}
            <div className="item2 col-span-2 text-end">
              TK. {product.phone_price}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllProducts;
