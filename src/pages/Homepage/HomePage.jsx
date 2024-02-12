"use client"
import "./HomePage.css";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Banners from "./Banners/Banners";
import HomeProduct from "./HomeProduct/HomeProduct";
import DailyDeals from "./DailyDeals/DailyDeals";
import TopProducts from "./TopProducts/TopProducts";
import DealsAlert from "./DealsAlert/DealsAlert";
import { useState,useEffect } from "react";

const HomePage = () => {
  const [homeData, setHomeData] = useState([]);
  const [subDropdowns, setSubDropdowns] = useState(
    Array(navItems.length).fill(false)
  );
  const dropdownRef = useRef(null);
  useEffect(() => {
    getData1('http://localhost:3000/productData')
  }, [])
  const getData1 = async (url) => {
    try {
      await axios.get(url).then((res) => {

        setHomeData(res.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>  
    <div className="container">
      <div className="mt-48">
        <Carousel />
        <FeaturedProduct />
        <Banners />
        <HomeProduct homeData={homeData} />
        <DailyDeals />
        <TopProducts />
        <DealsAlert />
      </div>
    </div></>
  );
};

export default HomePage;
