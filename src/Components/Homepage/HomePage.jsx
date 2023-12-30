import React from "react";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Banners from "./Banners/Banners";
import HomeProduct from "./HomeProduct/HomeProduct";
import DailyDeals from "./DailyDeals/DailyDeals";
import TopProducts from "./TopProducts/TopProducts";
import DealsAlert from "./DealsAlert/DealsAlert";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <div className="mt-48">
        <Carousel />
        <FeaturedProduct />
        <Banners />
        <HomeProduct />
        <DailyDeals />
        <TopProducts />
        <DealsAlert />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
