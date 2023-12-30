"use client";
import React, { lazy, Suspense } from "react";

const EmailAlert1 = lazy(() => import("../HomeSlider/EmailAlert1"));
const DealsAlert = () => {
  return (
    <section className="homeCarousel ">
      <div className=" bg-sky-300 rounded-3xl">
        <div className="carousel-item  full-overlay flex justify-center items-center ">
          <div className="img-info flex flex-col items-center justify-start z-10 w-[50%]">
            <div className="">
              <h2 className="mb-4 text-[40px] font-bold text-[#000000b3] ">
                Stay home & get your daily <br />
                needs from our shop
              </h2>

              <p className="text-[25px] font-medium text-[#545454] mb-4">
                Start You'r Daily Shopping with name
              </p>
              <EmailAlert1 />
            </div>
          </div>
          <img
            src="./images/newsletter.png"
            className="carousel-img w-[50%] mt-9"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsAlert;
