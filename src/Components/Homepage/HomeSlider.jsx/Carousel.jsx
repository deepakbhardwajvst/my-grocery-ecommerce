"use client";

import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
  };

  return (
    <section className="Carousel">
      <div className="container">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src="./images/slider-1.png" className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Dont miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src="./images/slider-2.png" className="w-100" />
            <div className="info">
              <h2 class="mb-3">
                Fresh Vegetables
                <br />
                Big discount
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
