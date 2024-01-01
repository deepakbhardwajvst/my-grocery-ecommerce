import React from "react";
import data from "@/Data/data";

import Card from "./Card/Card";

const HomeProduct = () => {
  const categories = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Vegetables",
    "Fruits",
  ];

  return (
    <div className="home-product mt-6">
      <div className="hp-head-box flex justify-between items-center w-full">
        <h2 className="hp-heading w-[60%] text-3xl font-semibold">
          Popular Products
        </h2>
        <ul className="hp-head-items flex w-[40%] justify-between">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hp-head-item hover:text-gray-200 cursor-pointer whitespace-nowrap hover:scale-[1.2]"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-4 my-8 flex flex-wrap justify-between">
        {data.map((data, index) => (
          <div key={data.id}>
            <Card data={data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
