"use client";

import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Breadcrump from "./../ListingPage/Breadcrump/Breadcrump";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Product = () => {
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );
  const [productData, setProductData] = useState(true);
  const [isAdded, setIsadded] = useState(false);
  const [isAdded2, setIsadded2] = useState(false);
  const [isAdded3, setIsadded3] = useState(false);
  const [activeSize, setActiveSize] = useState(0);
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    setCount(count + 1);
  };
  const decreaseHandler = () => {
    if (count === 0) {
      setCount(count);

      alert("Become a vendor");
    } else {
      setCount(count - 1);
    }
  };
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

  const addToCart = () => {
    setIsadded(!isAdded);
  };
  const addToCart2 = () => {
    setIsadded2(!isAdded2);
  };
  const addToCart3 = () => {
    setIsadded3(!isAdded3);
  };
  const isActive = (index) => {
    setActiveSize(index);
  };
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

        <div className=" detailsContainer pt-3 pb-3 flex">
          {/* productZoom code start here */}
          <div className="w-[30%] flex flex-col">
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
          <div className="flex flex-col justify-start ml-5 w-[70%]">
            <h3 className="mb-2">
              <u>MAGGI</u>
            </h3>
            <span className="catName text-4xl mb-1">
              MAGGI 2-Min Masala Instant Noodles, 70 g
            </span>
            <h4 className="mb-3  p-1 cardbg1 color1 buttonhoverbg1 flex justify-start  cursor-pointer w-max rounded-sm">
              Pouch
            </h4>
            <Rating
              name="half-rating-read"
              value={4.1}
              precision={0.5}
              readOnly
            />
            <span className="textclr1 my-1">
              By <strong>Nestle</strong>{" "}
            </span>

            <div className="flex items-center mt-3">
              <div className="flex items-center w-100">
                <span className="price text-g font-weight-bold text-2xl mr-3">
                  Price: ₹13
                </span>
                <span className="oldPrice ml-auto">
                  ( MRP: <span className=" line-through">₹14 </span>)
                </span>
              </div>
            </div>
            <p className="color2 text-sm">You Save: 7% OFF</p>
            <p className="textclr1 text-sm"> (inclusive of all taxes)</p>
            <h3 className="my-2">
              <strong>About the Product </strong>
            </h3>

            <p className="mb-3">
              India’s favourite Masala Noodles, MAGGI 2-minute Noodles, now come
              with the goodness of Iron. Each portion (70g) of MAGGI Masala
              Noodles provides you with 15% of your daily Iron requirement (*as
              per the Daily Dietary Allowances for an Adult Sedentary Male (ICMR
              2010). Containing your favourite masala taste, MAGGI noodles are
              made with the choicest quality spices. Make your bowl of MAGGI
              even better by chopping up some vegetables, dropping in an egg or
              throwing in your favourite ingredients.)
            </p>

            <div className="my-2 flex items-center ">
              <span>Size / Weight:</span>
              <ul className="flex mb-0 pl-4">
                <li className="  cursor-pointer">
                  <a
                    className={`border1 p-1 rounded-sm ml-2  ${
                      activeSize === 0 ? " bg-blue-500" : ""
                    }`}
                    onClick={() => isActive(0)}
                  >
                    70gm
                  </a>
                </li>
                <li className="  cursor-pointer">
                  <a
                    className={`border1 p-1 rounded-sm ml-2  ${
                      activeSize === 1 ? " bg-blue-500" : ""
                    }`}
                    onClick={() => isActive(1)}
                  >
                    140gm
                  </a>
                </li>
                <li className="  cursor-pointer">
                  <a
                    className={`border1 p-1 rounded-sm ml-2  ${
                      activeSize === 2 ? " bg-blue-500" : ""
                    }`}
                    onClick={() => isActive(2)}
                  >
                    280gm
                  </a>
                </li>
                <li className="  cursor-pointer">
                  <a
                    className={`border1 p-1 rounded-sm ml-2  ${
                      activeSize === 3 ? " bg-blue-500" : ""
                    }`}
                    onClick={() => isActive(3)}
                  >
                    420gm
                  </a>
                </li>
                <li className="  cursor-pointer">
                  <a
                    className={`border1 p-1 rounded-sm ml-2  ${
                      activeSize === 4 ? " bg-blue-500" : ""
                    }`}
                    onClick={() => isActive(4)}
                  >
                    560gm
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[100%] flex my-3 gap2">
              <div className="border1 px-1 flex w-[80px] justify-between">
                <div className="p-quantity px-2 flex justify-center items-center  text-xl w-[80%]">
                  {count}
                </div>
                <div className="p-plus-minus-box flex flex-col">
                  <KeyboardArrowUpIcon
                    onClick={increaseHandler}
                    className="cursor-pointer"
                  />
                  <KeyboardArrowDownIcon
                    onClick={decreaseHandler}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <Button
                className="flex justify-center w-[25%] transition1  cardbg1 color1 py-3 px-2 buttonhoverbg1  ml-3"
                onClick={() => addToCart(productData)}
              >
                <ShoppingCartOutlinedIcon className="color1" />
                {isAdded === true ? "Added" : "Add to basket"}
              </Button>
              <Button
                className="flex justify-center w-[25%] transition1  cardbg1 color1 py-3 px-2 buttonhoverbg1  ml-3"
                onClick={() => addToCart2(productData)}
              >
                <ShoppingCartOutlinedIcon className="color1" />
                {isAdded2 === true ? "Saved" : "Save for later"}
              </Button>
              <Button
                className="flex justify-center w-[25%] transition1  cardbg1 color1 py-3 px-2 buttonhoverbg1  ml-3"
                onClick={() => addToCart3(productData)}
              >
                <CompareArrowsIcon className="color1" />
                {isAdded3 === true ? "Added" : "Compare"}
              </Button>
            </div>
            <p className=" text-xs">
              <DeliveryDiningIcon /> Earliest: Get it in 9 hrs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
