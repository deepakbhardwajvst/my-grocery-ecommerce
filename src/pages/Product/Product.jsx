"use client";

import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Breadcrump from "./../ListingPage/Breadcrump/Breadcrump";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Product = () => {
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );
  const imgdata = [
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg",
    },
    {
      img: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg",
    },
  ];




  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "productpageslider",
    fade: false,
    arrows: true,
    autoplay: false,
  };



  return (
    <>
      <section className="detailsPage mb-5 mt-[166px]">
        <div className="w-full h-auto py-7 mb-4">
          <div className="container-fluid">
            <Breadcrump />
          </div>
        </div>

        <div className=" detailsContainer pt-3 pb-3">
          <div className="">
            {/* productZoom code start here */}
            <div className="w-[25%] flex flex-col">
              <div className="productZoom w-[100%]">
                <div className="item w-[100%]">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    className="w-[100%] mr-1"
                    src={`${zoomImage}?im=Resize=(1500,1500)`}
                  />
                </div>
              </div>
              <div className="productpageslider relative flex justify-between mt-4 ">
                <Slider {...settings} className="productpageslider w-[100%]">
                  {imgdata.map((item, index) => (
                    <div className="item w-[18%]" key={index}>
                      <Image
                        src={`${item.img}?im=Resize=(150,150)`}
                        alt={`product-${index}`}
                        onClick={() => {
                          setZoomImage(item.img);
                        }}
                        width={144}
                        height={144}
                        priority
                        className="w-[98%] border1 rounded"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* productZoom code ends here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
