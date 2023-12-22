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
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = (url) => {
    axios
      .get(url)
      .then((res) => {
        if (res !== null) {
          const countryNames = res.data.data.map((item) => item.country);
          setCountries(countryNames);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="header flex items-center justify-between my-4 w-full rounded-lg">
      {/* Header image */}
      <div className="h-img-box w-1/6">
        <img src="./images/logo.svg" alt="Logo" className=" object-cover" />
      </div>
      {/* Header image */}
      {/* Header Search Star Here */}
      <div className="h-search-box flex items-center justify-between w-2/6 h-10 py-2 px-4 bg-white">
        <div className="h-category-box relative w-[31%] flex items-center cursor-pointer">
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
      <div className="w-1/6">
        <div className="h-location-box h-9 cursor-pointer px-2  rounded-2xl flex justify-center items-center bg-white">
          <DropdownSearch
            data={countries}
            frontHeading={"Location"}
            icon={<LocationOnOutlinedIcon className="text-black  pr-1" />}
          />
        </div>
      </div>
      {/* Header Location Box */}
      <div className="h-account-box w-1/4 whitespace-nowrap w">
        <AccountBox />
      </div>
    </div>
  );
};

export default Header;
