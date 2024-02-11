"use client";

import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../ListingPage.css";
import Image from "next/image";
import { useState } from "react";
function valuetext(value) {
  return `${value}`;
}
const FilterBar = () => {
  const [value, setValue] = useState([100, 440]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    {
      heading: "Milks & Dairies",
      img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg",

      number: "30",
    },
    {
      heading: "Clothing",
      img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg",
      number: "35",
    },
    {
      heading: "Pet Foods",
      img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg",

      number: "41",
    },
    {
      heading: "Baking Materials",
      img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg",

      number: "68",
    },
    {
      heading: "Fresh Fruit",
      img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg",

      number: "87",
    },
  ];
  const colorsArray = [
    { color: "Red", number: 24 },
    { color: "Green", number: 15 },
    { color: "Blue", number: 8 },
    { color: "Yellow", number: 30 },
    { color: "Purple", number: 12 },
    { color: "Orange", number: 18 },
    { color: "Pink", number: 7 },
    { color: "Teal", number: 22 },
    { color: "Brown", number: 11 },
    { color: "Cyan", number: 14 },
    { color: "Red", number: 24 },
    { color: "Green", number: 15 },
    { color: "Blue", number: 8 },
    { color: "Yellow", number: 30 },
    { color: "Purple", number: 12 },
    { color: "Orange", number: 18 },
    { color: "Pink", number: 7 },
    { color: "Teal", number: 22 },
    { color: "Brown", number: 11 },
    { color: "Cyan", number: 14 },
  ];
  const conditionArray = [
    { color: "New", number: 1500 },
    { color: "old", number: 304 },
    { color: "Refurbished", number: 27 },
  ];
  return (
    <>
      <div className="sidebar  sticky top-[160px]">
        <div className="card p-6 rounded-xl cardbg1 mb-10 shadow res-hide">
          <h3 className=" text-3xl font-semibold relative pb-5 mb-7 filterbar-heading before:bg-[#a5d7e8] after:bg-[#576cbc]">
            Category
          </h3>
          <div className="catList">
            {data.map((item, index) => {
              return (
                <div
                  className="catItem flex items-center justify-center p-3 border1 cursor-pointer my-3 rounded transition1 hover:scale-105"
                  key={index}
                >
                  <span className="img">
                    <Image
                      src={item.img}
                      height={144}
                      width={144}
                      className="h-10"
                      Priority
                    />
                  </span>
                  <h4 className="mb-1 mx-3 color1 text-xl text-capitalize">
                    {item.heading}
                  </h4>
                  <span className="flex items-center justify-center p-1 rounded-[50%] border1 ml-auto">
                    {item.number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card p-6 rounded-xl cardbg1 mb-10 shadow res-hide">
          <h3 className=" text-3xl font-semibold relative pb-5 mb-7 filterbar-heading before:bg-[#a5d7e8] after:bg-[#576cbc]">
            Fill by price
          </h3>

          <Slider
            value={value}
            onInput={setValue}
            getAriaLabel={() => {
              "Temprature range";
            }}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            onChange={handleChange}
            min={10}
            max={600}
            step={5}
          />
          <div className="flex py-2 priceRange">
            <span className=" text-lg">
              From: <strong className="text-success">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto text-lg">
              From: <strong className="text-success">Rs: {value[1]}</strong>
            </span>
          </div>
          <div className="filters  py-6">
            <h3 className=" font-semibold mb-[10px]">Color</h3>
            <ul className=" max-h-52 overflow-y-auto ml-[10px]">
              {colorsArray.map((item, index) => {
                return (
                  <li className="w-full mb-1" key={index}>
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="filterbox-label cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        className="filterbox-checkbox"
                      />
                      <span className="ml-2">
                        {item.color}({item.number})
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filters  py-6">
            <h3 className=" font-semibold mb-[10px]">Item Condition</h3>
            <ul className=" max-h-52 overflow-y-auto ml-[10px]">
              {conditionArray.map((item, index) => {
                return (
                  <li className="w-full mb-1" key={index}>
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="filterbox-label cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        className="filterbox-checkbox"
                      />
                      <span className="ml-2">
                        {item.color}({item.number})
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="d-flex filterWrapper">
            <Button className="btn buttonbg1 buttonhoverbg1 w-full color1">
              <FilterAltOutlinedIcon className="color1" /> Filter
            </Button>
          </div>
        </div>

        <img src="" className="w-100" />
      </div>
    </>
  );
};

export default FilterBar;
