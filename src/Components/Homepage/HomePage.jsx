import React from "react";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Banners from "./Banners/Banners";
import HomeProduct from "./HomeProduct/HomeProduct";
import DailyDeals from "./DailyDeals/DailyDeals";

const HomePage = () => {
  return (
    <div className="container ">
      <div className="mt-40">
        <Carousel />
        <FeaturedProduct />
        <Banners />
        <HomeProduct />
        <DailyDeals />
      </div>
    </div>
  );
};

export default HomePage;
