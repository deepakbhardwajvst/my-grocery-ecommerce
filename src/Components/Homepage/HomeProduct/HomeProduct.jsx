import React from "react";
import HPCard from "./HPCard/HPCard";

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
        <h2 className="hp-heading w-[60%] text-3xl">Popular Products</h2>
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
      <HPCard />
    </div>
  );
};

export default HomeProduct;
