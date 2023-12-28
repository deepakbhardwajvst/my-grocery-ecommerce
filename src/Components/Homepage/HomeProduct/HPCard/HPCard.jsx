import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "../../HomePage.css";
import "./Tooltip.css";

const HPCard = (props) => {
  return (
    <div className="mx-4 my-8 flex flex-wrap justify-between">
      {props.data.map((item) => (
        <div key={item.id} className="hpcard w-[300px] my-6 relative">
          {item.tag !== null && item.tag !== undefined && (
            <span
              className={`badge absolute top-0 left-0 text-gray-600  z-10 inline-block px-[25px] py-[10px] capitalize  rounded-br-[100px] rounded-tl-[50px] ${item.tag}`}
            >
              {item.tag}
            </span>
          )}
          <div className="hpcard-box cardbg1 rounded-3xl overflow-hidden shadow-md ">
            <div className="hpcard-img-box relative">
              <div className=" full-overlay ">
                <img
                  src={item.image}
                  alt=""
                  className="hpcard-img w-full object-cover"
                />
              </div>
              <div className="hpcard-icons transition absolute top-0 left-0 w-full h-full p-7 flex items-center justify-center  scale-75 z-20">
                <ul className=" flex cardbg1 rounded-xl h-auto justify-center  items-center">
                  <li className="h-category-box flex items-center justify-center">
                    <a
                      className=" cursor-pointer p-3 "
                      tooltip="Add to Wishlist"
                    >
                      <FavoriteBorderOutlinedIcon className="text-gray-300  m-1 " />
                    </a>
                  </li>
                  <li className="h-category-box flex items-center justify-center">
                    <a className=" cursor-pointer p-3 " tooltip="Compare">
                      <CompareArrowsOutlinedIcon className="text-gray-300 " />
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <a className=" cursor-pointer p-3 " tooltip="Quick View">
                      <RemoveRedEyeOutlinedIcon className="text-gray-300 " />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.category}</p>
              <h3 className="text-xl font-semibold color1 mb-2">
                {item.productName}
              </h3>
              <div className="flex items-center mb-2">
                <div className="hpcard-rating">
                  <Rating
                    name="half-rating-read"
                    value={item.rating}
                    emptyIcon={
                      <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                    }
                    className=""
                    readOnly
                  />
                </div>
                {/* <span className="textclr1 text-sm ml-2">({item.rating})</span> */}
              </div>
              <p className="text-sm textclr1 mb-2">
                By
                <span className="font-bold text-[16px] text-gray-500 ml-1">
                  {item.company}
                </span>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xl text-gray-300 font-bold relative pl-[10px]">
                  <CurrencyRupeeIcon className=" absolute top-1 left-[-1px] text-sm" />
                  {item.price}
                </p>
                <button className="buttonbg1 color1 px-4 py-2 rounded-full focus:outline-none">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HPCard;
