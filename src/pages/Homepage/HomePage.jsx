"use client";
import "./HomePage.css";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Banners from "./Banners/Banners";
import HomeProduct from "./HomeProduct/HomeProduct";
import DailyDeals from "./DailyDeals/DailyDeals";
import TopProducts from "./TopProducts/TopProducts";
import DealsAlert from "./DealsAlert/DealsAlert";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [homeData, setHomeData] = useState([]);

  const getData1 = async (url) => {
    try {
      const response = await axios.get(url);
      setHomeData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData1('http://localhost:3000/productData');
  }, []);
  const dalsAndPulsesCategory = homeData && homeData[0] && homeData[0].items && homeData[0].items[0] && homeData[0].items;

  return (
    <>  
    <div className="container">
      <div className="mt-48">
        <Carousel />
        <FeaturedProduct />
        <Banners />
        <HomeProduct dalsAndPulsesCategory={dalsAndPulsesCategory} />
        <DailyDeals />
        <TopProducts />
        <DealsAlert />
      </div>
    </div></>
  );
};

export default HomePage;
