"use client";

import Slider from "react-slick";
import "./Carousel.css";
import EmailAlert from "./EmailAlert";

const Carousel = () => {
  const carouselData = [
    {
      imgSrc: "./images/slider-1.png",
      title: "Dont miss amazing ",
      afterBr: "grocery deals",
      description: "Sign up for the daily newsletter",
    },
    {
      imgSrc: "./images/slider-2.png",
      title: "Fresh Vegetables",
      afterBr: " Big discount",
      description: "Sign up for the daily newsletter",
    },
    // Add more data objects as needed
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "Home-carousel-main",
    fade: true,
    arrows: true,
    autoplay: true,
  };

  return (
    <section className="homeCarousel">
      <div className="relative">
        <Slider {...settings} className="Home-carousel-main">
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-item relative full-overlay">
              <img src={item.imgSrc} className="carousel-img w-100" />
              <div className="img-info absolute top-[15%] left-[7%] z-10 ">
                <h2 className="mb-4 text-[60px] font-bold text-[#000000b3] ">
                  {item.title} <br />
                  {item.afterBr}
                </h2>
                <p className="text-[30px] font-medium text-[#b5b4b4]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <EmailAlert />
      </div>
    </section>
  );
};

export default Carousel;
