"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Description from "./Description/Description";
import AdditionalInfo from "./AdditionalInfo/additionalInfo";
import Reviews from "./Reviews/Reviews";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="border1 py-6 px-10 cardbg1 rounded-xl mt-10">
      <ul className="flex color1 gap-4 my-6">
        <li
          className="rounded-2xl border1"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          <Button className="color1">Description</Button>
        </li>
        <li
          className="rounded-2xl border1"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          <Button className="color1">Additional Info</Button>
        </li>
        <li
          className="rounded-2xl border1"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          <Button className="color1">Reviews</Button>
        </li>
      </ul>
      {activeTab === 0 && <Description />}
      {activeTab === 1 && <AdditionalInfo />}
      {activeTab === 2 && <Reviews />}
    </div>
  );
};

export default ProductDetails;
