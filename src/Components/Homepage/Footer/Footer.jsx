"use client";
import React from "react";
import "./Footer.css";

import MiddleFooter from "./MiddleFooter/MiddleFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
const Footer = () => {
  const footerBoxData = [
    {
      imgSrc: "./images/icon-1.svg",
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "./images/icon-2.svg",
      title: "Free delivery",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "./images/icon-3.svg",
      title: "Great daily deal",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "./images/icon-4.svg",
      title: "Wide assortment",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "./images/icon-5.svg",
      title: "Easy returns",
      description: "Orders $50 or more",
    },
  ];

  const topFooter = () => {
    return (
      <div className="flex justify-between  p-8 ">
        {footerBoxData.map((box, index) => (
          <div
            key={index}
            className="transition1 flex items-center buttonbg1 justify-center p-4 rounded-lg"
          >
            <div className="">
              <img
                src={box.imgSrc}
                alt={`Icon ${index + 1}`}
                className=" object-contain"
              />
            </div>
            <div className="info ml-3">
              <h4>{box.title}</h4>
              <p>{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <footer className="footer w-full cardbg1 rounded-lg">
      <div className="borderb1">
        <div className="container ">
          {topFooter()}
          <MiddleFooter />
        </div>
      </div>
      <div className="container">
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
