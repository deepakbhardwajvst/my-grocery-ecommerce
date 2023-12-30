"use client";
import "./DailyDeals.css";
import Slider from "react-slick";
import Card from "../HomeProduct/Card/Card";

const DailyDeals = () => {
  const bestSelling = [
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "DD-slider",
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className=" h-[556px]">
      <div className="">
        <div className="">
          <h2 className=" text-3xl font-semibold">Daily Best Sells</h2>
        </div>

        <br />
        <br />
        <div className="flex  justify-between">
          <div className="w-[20%]">
            <img
              src="./images/banner4.jpg"
              className="w-[300px] h-[495px] rounded-3xl"
              alt="Banner"
            />
          </div>
          <div className="ml-4 flex   w-[80%]">
            <Slider {...settings} className="DD-slider flex w-[100%]">
              {bestSelling.map((item, index) => {
                return <Card data={item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
