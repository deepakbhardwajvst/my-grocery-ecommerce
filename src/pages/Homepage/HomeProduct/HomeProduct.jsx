import React from "react";
const Data = [
  {
    id: 1,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "new",

    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },

  {
    id: 3,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.2,
    tag: "hot",
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 4,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 3.5,
    tag: "best",
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 5,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "new",
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 6,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 5,
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 13,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.2,
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 2,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4,
    tag: "sale",
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 14,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 3.5,
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 15,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "hot",
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
  {
    id: 16,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 5,
    company: "Nestle",
    price: 300,
    image: "/images/thumbnail-1.jpg",
  },
];
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
        {Data.map((data, index) => (
          <div key={data.id}>
            <Card data={data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
