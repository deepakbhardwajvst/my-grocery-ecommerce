"use client";
import { useEffect, useState } from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DropdownSearch from "./DropdownSearch/DropdownSearch";
import axios from "axios";
import AccountBox from "./AccountBox/AccountBox";

const Header = () => {
  const categories = [
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ];
  const countries = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          //console.log(res.data.data);
          res.data.data.map((item, index) => {
            countries.push(item.country);
            //console.log(item.country)
          });

          //console.log(res.data.data[0].country)
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="header flex items-center justify-between my-4 w-full rounded-lg">
      {/* Header image */}
      <div className="h-img-box w-1/6">
        <img src="./images/logo.svg" alt="Logo" className=" object-cover" />
      </div>
      {/* Header image */}
      {/* Header Search Star Here */}
      <div className="h-search-box flex items-center justify-between w-[37%] h-10 py-2 px-4 bg-white">
        <div className="h-category-box relative w-[29%] flex items-center cursor-pointer">
          <DropdownSearch
            data={categories}
            frontHeading={"All Categories"}
            icon={false}
          />
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Fortune soyabean oil"
          className="outline-none placeholder-shown:text-center w-[60%] text-black capitalize"
        />
        <SearchIcon className="text-black opacity-50 " />
      </div>
      {/* Header Search  End Here   */}
      {/* Header Location Box */}
      <div className="h-location-box px-2 rounded-2xl bg-white flex justify-center items-center w-max cursor-pointer">
        <div className=" h-9  flex justify-center items-center">
          <DropdownSearch
            data={countries}
            frontHeading={"Location"}
            icon={<LocationOnOutlinedIcon className="text-black  pr-1" />}
          />
        </div>
      </div>
      {/* Header Location Box */}
      <div className="h-account-box w-[29%] whitespace-nowrap ml-2 ">
        <AccountBox />
      </div>
    </div>
  );
};

export default Header;
