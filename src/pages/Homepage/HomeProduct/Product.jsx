import "../HomePage.css";
import "./Card/Tooltip.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import Image from "next/image";
import Link from 'next/link';

const Product = (props) => {
   
    return (
        
        <div className="hpcard w-[300px] mb-4 relative ">
           
            <div className="hpcard-box cardbg1 rounded-3xl overflow-hidden shadow-md min-h-[524px] max-h-[525px] flex flex-col justify-start">
                <div className="hpcard-img-box relative">
                    <div className="full-overlay bg-white p-4">
                        <Image
                            height={144}
                            width={144}
                            loading="lazy"
                            priority={false}
                            src={props.item.catImg}
                            alt="Product Image"
                            className="hpcard-img w-full max-h-[260px] object-cover"
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
                <div className="p-4 min-h-[230px] flex flex-col  justify-evenly">
                    <p className="text-sm text-gray-500">{props.item.parentCatName
}</p>
                    <h3 className="text-xl font-semibold color1 mb-2">
                        {props.item.productName}
                    </h3>
                    <div className="flex items-center mb-2">
                        <div className="hpcard-rating">
                            <Rating
                                name="half-rating-read"
                                value={props.item.rating}
                                emptyIcon={
                                    <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                                }
                                className=""
                                readOnly
                            />
                        </div>
                        <span className="textclr1 text-sm ml-2">({props.item.rating})</span>
                    </div>
                    <p className="text-sm textclr1 mb-2">
                        By
                        <span className="font-bold text-[16px] text-gray-500 ml-1">
                            {props.item.brand}
                        </span>
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-xl text-gray-300 font-bold relative pl-[10px]">
                            <CurrencyRupeeIcon className=" absolute top-1 left-[-1px] text-sm" />
                            {props.item.price}
                        </p>
                        <Link href="/listing/product"> <button className="buttonbg1 color1 px-4 py-2 rounded-full focus:outline-none">
                            Add
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
