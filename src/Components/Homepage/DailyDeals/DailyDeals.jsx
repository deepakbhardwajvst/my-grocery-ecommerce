const bestSells = [
  {
    id: 1,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "new",

    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },

  {
    id: 3,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.2,
    tag: "hot",
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 4,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 3.5,
    tag: "best",
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 5,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "new",
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 6,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 5,
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 13,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.2,
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 2,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4,
    tag: "sale",
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 14,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 3.5,
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 15,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 4.5,
    tag: "hot",
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
  {
    id: 16,
    category: "Snack",
    productName: "Delicious Snack",
    rating: 5,
    company: "Nestle",
    price: 300,
    image: "./images/thumbnail-1.jpg",
  },
];
import React from "react";
import HPCard from "../HomeProduct/HPCard/HPCard";

const DailyDeals = () => {
  return (
    <section className="homeProducts homeProductsRow2 pt-0">
      <div className="">
        <div className="flex items-center">
          <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
        </div>

        <div className="flex">
          <div className="">
            <img src="./images/banner4.jpg" className="w-[300px]" />
          </div>

          <div className="col-md-9">
            <div className="item">
              <HPCard data={bestSells} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
