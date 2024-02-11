"use client";
import React, { useState, useEffect } from "react";
import Card from "@/pages/Homepage/HomeProduct/Card/Card";
import { Button } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import data from "@/Data/data";
const Products = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  const [value, setValue] = useState(5);
  const [value2, setValue2] = useState("Featured");
  return (
    <div className="px-4">
      <div className="products-bar-top">
        <div className="pbt-heading flex justify-between">
          <h3 className=" text-lg">
            We found <span className=" text-cyan-400 font-bold">29</span> items
            for you!
          </h3>
          <div className="ml-auto flex items-center">
            <div className="w-[200px] position-relative">
              <Button
                className="btn_ border1 py-[10px] px-5 capitalize color1 rounded-xl text-base w-[100%] justify-start cardbg1"
                onClick={() => setIsOpenDropDown(!isOpenDropDown)}
              >
                <GridViewOutlinedIcon className=" opacity-50 " /> Show :{" "}
                <span className="ml-2">{value}</span>
              </Button>
              {isOpenDropDown !== false && (
                <ul className="w-[200px] absolute  z-30">
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(5);
                      }}
                    >
                      5
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(10);
                      }}
                    >
                      10
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(15);
                      }}
                    >
                      15
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue(20);
                      }}
                    >
                      20
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
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
            <div className="w-[200px] position-relative ml-4">
              <Button
                className="btn_ border1 py-[10px] px-5 capitalize color1 rounded-xl text-base w-[100%] justify-start cardbg1 "
                onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
              >
                <FilterListOutlinedIcon className=" opacity-50 " /> Show :{" "}
                <span className="ml-2">{value2}</span>
              </Button>
              {isOpenDropDown2 !== false && (
                <ul className="w-[200px] absolute z-30">
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown(false);
                        setValue2("Featured");
                      }}
                    >
                      Featured
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Price: Low to High");
                      }}
                    >
                      Price: Low to High
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Price: High to Low");
                      }}
                    >
                      Price: High to Low
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
                      onClick={() => {
                        setIsOpenDropDown2(false);
                        setValue2("Release Date");
                      }}
                    >
                      Release Date
                    </Button>
                  </li>
                  <li className="w-[200px]">
                    <Button
                      className="items-center cardbg1 border1  rounded-none color1 w-[200px]"
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
