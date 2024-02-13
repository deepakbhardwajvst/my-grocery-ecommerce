"use client"
import { useState,useEffect } from "react";
import data from "@/Data/data";

import Card from "./Card/Card";
import { Button } from '@mui/material';

const HomeProduct = (props) => {
  const [prodData, setprodData] = useState(props.dalsAndPulsesCategory || []);
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  console.log(props.dalsAndPulsesCategory)
  const categories = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Vegetables",
    "Fruits",
  ];

  const catArr = [];
  useEffect(() => {
    if (props.dalsAndPulsesCategory && props.dalsAndPulsesCategory.length !== 0) {
      const catArr = [];
      props.dalsAndPulsesCategory.forEach((item) => {
        catArr.push(item.cat_name);
      });
      const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
      setcatArray(list2);
      setactiveTab(list2[0]);
    }
  }, [props.dalsAndPulsesCategory]);

  useEffect(() => {
    if (activeTabData.length === 0) {
      return; // Avoid running on every render
    }
    var arr = [];
    setActiveTabData(arr);
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        if (item.cat_name === activeTab) {
          if (item.products && item.products.length !== 0) {
            item.products.map((product) => {
              arr.push({ ...product, parentCatName: item.cat_name, subCatName: item.cat_name });
            });
            setActiveTabData(arr);
            setTimeout(() => {
              // Placeholder for setIsLoadingProducts
              setIsLoadingProducts(false);
            }, 1000);
          }
        }
      })
  }, [activeTab, activeTabData, prodData])  


 
  const bestSellsArr = [];

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item) => {
        if (item.cat_name === "Electronics") {
              item.products.length !== 0 &&
                item.products.map((product, index) => {
                  bestSellsArr.push(product);
                })
          
        }
      });
  }, [])




  return (
    <div className="home-product mt-6">
      <div className="hp-head-box flex justify-between items-center w-full">
        <h2 className="hp-heading w-[60%] text-3xl font-semibold">
          Popular Products
        </h2>
        <ul className="hp-head-items flex w-[40%] justify-between">
          {
            catArray.length !== 0 &&
            catArray.map((cat, index) => {
              return (
                <li className="list list-inline-item" key={index}>
                  <Button><a className={` cursor-pointer capitalize b 
                    ${activeTabIndex === index ? 'act' : ''}`}
                    onClick={() => {
                      setactiveTab(cat)
                      setactiveTabIndex(index);
                     
                      setIsLoadingProducts(true);
                    }}
                  >
                    {cat}
                  </a></Button>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="mx-4 my-8 flex flex-wrap justify-between">
        {data.map((data, index) => (
          <div key={data.id}>
            <Card data={data} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
