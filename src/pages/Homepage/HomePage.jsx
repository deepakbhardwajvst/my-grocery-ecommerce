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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/productData');
      
        setHomeData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);



  // Render HomeProduct only if dalsAndPulsesCategory is available
  const dalsAndPulsesCategory = homeData && homeData[0] && homeData[0].items && homeData[0].items[0] && homeData[0].items;

  if (!dalsAndPulsesCategory) {
    return null; // or loading indicator
  }


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
