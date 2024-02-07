import "../../HomePage.css";
import "./Tooltip.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import Image from "next/image";

const Card = (props) => {
  return (
    <div className="hpcard w-[300px] mb-4 relative ">
      {props.data.tag !== null && props.data.tag !== undefined && (
        <span
          className={`badge absolute top-0 left-0 text-gray-600 z-10 inline-block px-[25px] py-[10px] capitalize rounded-br-[100px] rounded-tl-[50px] ${props.data.tag}`}
        >
          {props.data.tag}
        </span>
      )}
      <div className="hpcard-box cardbg1 rounded-3xl overflow-hidden shadow-md h-[auto] flex flex-col justify-between">
        <div className="hpcard-img-box relative">
          <div className="full-overlay">
            <Image
              height={144}
              width={144}
              loading="lazy"
              priority={false}
              src="https://rukminim2.flixcart.com/image/612/612/kj8wccw0/vegetable/q/w/t/1-carrot-red-un-branded-no-whole-original-imafyv2n34udxasa.jpeg?q=70"
              alt="Product Image"
              className="hpcard-img w-full h-full"
            />
          </div>
          <div className="hpcard-icons transition absolute top-0 left-0 w-full h-full p-7 flex items-center justify-center scale-75 z-20">
            <ul className=" flex cardbg1 rounded-xl h-auto justify-center items-center">
              <li className="h-category-box flex items-center justify-center">
                <a className=" cursor-pointer p-3 " tooltip="Add to Wishlist">
                  <FavoriteBorderOutlinedIcon className="text-gray-300 m-1 " />
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
          <p className="text-sm text-gray-500">{props.data.category}</p>
          <h3 className="text-xl font-semibold color1 mb-2">
            {props.data.productName}
          </h3>
          <div className="flex items-center mb-2">
            <div className="hpcard-rating">
              <Rating
                name="half-rating-read"
                value={props.data.rating}
                emptyIcon={
                  <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                }
                className=""
                readOnly
              />
            </div>
            <span className="textclr1 text-sm ml-2">({props.data.rating})</span>
          </div>
          <p className="text-sm textclr1 mb-2">
            By
            <span className="font-bold text-[16px] text-gray-500 ml-1">
              {props.data.company}
            </span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-300 font-bold relative pl-[10px]">
              <CurrencyRupeeIcon className=" absolute top-1 left-[-1px] text-sm" />
              {props.data.price}
            </p>
            <button className="buttonbg1 color1 px-4 py-2 rounded-full focus:outline-none">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
