import { Rating } from "@mui/material";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
const TopProductsCard = (props) => {
  return (
    <div>
      <div className="top-selling-card my-12 cardbg1 px-3 pb-3 pt-1 rounded-xl">
        <h3 className="ts-box-heading text-3xl    font-semibold pb-5 my-7 borderb1">
          {props.data.title}
        </h3>
        <div className="flex flex-col">
          {props.data.carddetail.map((item, index) => {
            return (
              <div
                className="ts-items  hover:translate-y-[-10px] flex items-center transition1 my-3 mr-3 cursor-pointer buttonbg2 rounded-lg"
                key={index}
              >
                <div className="ts-img-box w-[30%] rounded-lg">
                  <Image
                    height={144}
                    width={144}
                    alt="Top Products"
                    priority={false}
                    loading="lazy"
                    src="https://rukminim2.flixcart.com/image/612/612/kj8wccw0/vegetable/q/w/t/1-carrot-red-un-branded-no-whole-original-imafyv2n34udxasa.jpeg?q=70"
                    className="ts-image h-[114px] w-full   object-cover  rounded-lg "
                  />
                </div>

                <div className="ts-info px-3 w-[70%]">
                  <h4 className="ts-heading font-semibold opacity-80 text-lg">
                    {item.heading}
                  </h4>

                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                  <div className="flex items-center">
                    <span className="ts-price text-g font-bold text-lg mr-5">
                      {item.currentPrice}
                      <CurrencyRupeeIcon className=" text-base " />
                    </span>
                    <span className="ts-normal-price text-lg opacity-60  line-through relative">
                      {item.normalPrice}
                      <span className="text-base">₹</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProductsCard;
