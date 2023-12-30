"use client";
import "./FeaturedProducts.css";
import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
const FeaturedProduct = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    fade: false,
    className: "featured-products-carousel",
    arrows: true,
    autoplay: 2000,
    // centerMode: true,
  };

  return (
    <>
      <div className="featured-products w-full h-auto py-7">
        <div className="featured-products-section ">
          <h2 className="featured-products-heading text-3xl mb-4 flex items-center font-semibold">
            Featured Categories
          </h2>
          <Slider {...settings} className="featured-products-carousel" id="">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div
                    className="featured-products-item full-overlay h-auto flex items-center justify-center flex-col p-4  cursor-pointer  "
                    key={index}
                  >
                    <div
                      className="featured-products-box m-auto flex items-center justify-center  flex-col p-4 relative rounded-md"
                      style={{ background: item }}
                    >
                      <Image
                        height={144}
                        width={144}
                        loading="lazy"
                        priority={false}
                        alt="Featured products image"
                        src="https://rukminim2.flixcart.com/image/612/612/kj8wccw0/vegetable/q/w/t/1-carrot-red-un-branded-no-whole-original-imafyv2n34udxasa.jpeg?q=70"
                        className="featured-product-img w-auto"
                      />
                      <h5 className="featured-products-name text-gray-800  capitalize mt-3">
                        vagetable
                      </h5>
                      <p className="featured-product-quantity text-[14px] opacity-80 text-gray-800 mb-0">
                        {index + 51} items
                      </p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
