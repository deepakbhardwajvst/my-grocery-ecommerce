"use client";
import "../../Homepage/DailyDeals/DailyDeals.css";
import Slider from "react-slick";
import Card from "@/pages/Homepage/HomeProduct/Card/Card";
const RelatedProducts = () => {
  const bestSelling = [
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "DD-slider",
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="my-6">
      <h2 className="rp-heading text-2xl my-6 borderb1 w-max pb-2 pr-4">Related Products</h2>
      <div className="ml-4 flex  w-[100%]">
        <Slider {...settings} className="DD-slider flex w-[100%]">
          {bestSelling.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
