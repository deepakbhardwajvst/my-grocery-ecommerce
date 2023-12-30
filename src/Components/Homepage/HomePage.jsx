import "./HomePage.css";
import Carousel from "./HomeSlider/Carousel";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import Banners from "./Banners/Banners";
import HomeProduct from "./HomeProduct/HomeProduct";
import DailyDeals from "./DailyDeals/DailyDeals";
import TopProducts from "./TopProducts/TopProducts";
import DealsAlert from "./DealsAlert/DealsAlert";

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
      </div>
    </div>
  );
};

export default HomePage;
