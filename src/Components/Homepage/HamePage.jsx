import React from "react";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

const HamePage = () => {
  return (
    <div className="container">
      <Carousel />
      <FeaturedProduct />
    </div>
  );
};

export default HamePage;
