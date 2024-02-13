"use client"
import { useState,useEffect } from "react";
import { Button } from '@mui/material';

import Product from "./Product";

const HomeProduct = (props) => {
  const [prodData, setprodData] = useState(props.dalsAndPulsesCategory || []);
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState("");
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

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
    console.log("Entering useEffect");
    console.log("Active Tab:", activeTab);
    console.log("Active Tab Data:", activeTabData);
    console.log("Prod Data:", prodData);

    if (activeTabData.length === 0 && prodData.length !== 0) {
      var arr = [];
      props.dalsAndPulsesCategory.forEach((item, index) => {
        console.log("Checking category:", item.cat_name);
        if (item.cat_name === activeTab && item.products && item.products.length !== 0) {
          console.log("Category matched:", item.cat_name);
          item.products.forEach((product) => {
            arr.push({ ...product, parentCatName: item.cat_name, subCatName: item.cat_name });
          });
        }
      });

      console.log("Setting Active Tab Data:", arr);
      setActiveTabData(arr);

      setTimeout(() => {
        setIsLoadingProducts(false);
        console.log("Final array:", arr);
      }, 1000);
    } else {
      console.log("No data to process");
    }
  }, [activeTab, activeTabData, prodData, props.dalsAndPulsesCategory]);





 
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
                  <Button className="b"><a className={` cursor-pointer capitalize  
                    ${activeTabIndex === index ? ' text-yellow-300' : ''}`}
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
      <div className="mx-4 my-8 flex flex-wrap justify-start">
        
        {
          activeTabData.length !== 0 &&
          activeTabData.map((item, index) => {
            
            return (
              <div className='item mr-3' key={index}>

                <Product tag={item.type} item={item} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default HomeProduct;
