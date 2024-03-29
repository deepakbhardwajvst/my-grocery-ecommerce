"use client";
import "./Footer.css";

import MiddleFooter from "./MiddleFooter/MiddleFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import Image from "next/image";
const Footer = () => {
  const footerBoxData = [
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg",
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      imgSrc:
        "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg",
      title: "Free delivery",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg",
      title: "Great daily deal",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg",
      title: "Wide assortment",
      description: "Orders $50 or more",
    },
    {
      imgSrc: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg",
      title: "Easy returns",
      description: "Orders $50 or more",
    },
  ];

  const topFooter = () => {
    return (
      <div className="flex justify-between py-8 ">
        {footerBoxData.map((box, index) => (
          <div
            key={index}
            className="transition1 flex items-center cardbg1 justify-center p-4 rounded-lg"
          >
            <div className="">
              <Image
                height={144}
                width={144}
                priority={false}
                loading="lazy"
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
    <footer className="footer w-full bg1 rounded-lg">
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
