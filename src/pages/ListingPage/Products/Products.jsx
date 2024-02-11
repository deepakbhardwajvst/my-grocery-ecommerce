"use client";
import React, { useState, useRef } from "react";
import Card from "@/pages/Homepage/HomeProduct/Card/Card";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import data from "@/Data/data";
import useOutsideClick from "@/CustomHook/useOutsideClick";
const Products = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  const [value, setValue] = useState(5);
  const [value2, setValue2] = useState("Featured");
  const dropdownRef = useRef(null);
  const dropdownHandler = () => {
    setIsOpenDropDown(!isOpenDropDown)
  };
  const dropdownHandler2 = () => {
    setIsOpenDropDown2(!isOpenDropDown2)
  };
  const closeDropdown = () => { return (setIsOpenDropDown2(false), setIsOpenDropDown(false)) }

  // Useing the custom hook
  useOutsideClick(dropdownRef, closeDropdown);
  //    for hiding dropdown menu ---->
  return (
    <div className="px-4">
      <div className="products-bar-top">
        <div className="pbt-heading flex justify-between">
          <h3 className=" text-lg">
            We found <span className=" text-cyan-400 font-bold">29</span> items
            for you!
          </h3>
          <div className="ml-auto flex items-center">
            <div className="w-[270px] position-relative" ref={dropdownRef}>
              <Button
                className="btn_ border1 py-[10px] px-5 capitalize color1 rounded-xl text-base w-[100%] justify-start cardbg1"
                onClick={dropdownHandler}
              >
                <GridViewOutlinedIcon className=" opacity-50 " /> Show :{" "}
                <span className="ml-2">{value}</span>
              </Button>
              {isOpenDropDown !== false && (
                <ul className="w-[270px] absolute  z-30">
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(5);
                      }}
                    >
                      5
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(10);
                      }}
                    >
                      10
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(15);
                      }}
                    >
                      15
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(20);
                      }}
                    >
                      20
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(25);
                      }}
                    >
                      25
                    </Button>
                  </li>
                </ul>
              )}
            </div>
            <div className="w-[270px] position-relative ml-4" ref={dropdownRef}>
              <Button
                className="btn_ border1  py-[10px] px-5 capitalize  color1 rounded-xl text-base w-[100%] justify-start cardbg1 "
                onClick={dropdownHandler2}
              >
                <FilterListOutlinedIcon className=" opacity-50 " /> Show :{" "}
                <span className="ml-2">{value2}</span>
              </Button>
              {isOpenDropDown2 !== false && (
                <ul className="w-[270px] absolute z-30">
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500 rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue2("Featured");
                      }}
                    >
                      Featured
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Price: Low to High");
                      }}
                    >
                      Price: Low to High
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Price: High to Low");
                      }}
                    >
                      Price: High to Low
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Release Date");
                      }}
                    >
                      Release Date
                    </Button>
                  </li>
                  <li className="w-[270px]">
                    <Button
                      className="items-center cardbg1 border1 hover:bg-blue-500  rounded-none color1 w-[270px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Avg. Rating");
                      }}
                    >
                      Avg. Rating
                    </Button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between my-4">

        {data.map((data, index) => (
          <div key={data.id}>
            <Card data={data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
