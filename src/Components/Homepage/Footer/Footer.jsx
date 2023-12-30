"use client";
import React from "react";
import "./Footer.css";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import EmailAlert1 from "../HomeSlider/EmailAlert1";

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
      <div className="flex justify-between cardbg1 p-8 rounded-lg">
        {footerBoxData.map((box, index) => (
          <div
            key={index}
            className="transition1 flex items-center buttonbg1 p-4 rounded-lg"
          >
            <span>
              <img src={box.imgSrc} alt={`Icon ${index + 1}`} />
            </span>
            <div className="info ml-3">
              <h4>{box.title}</h4>
              <p>{box.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <footer className="footer w-full">{topFooter()}</footer>;
};

export default Footer;
