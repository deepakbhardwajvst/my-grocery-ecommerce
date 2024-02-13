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
  const handleCategoryClick = (cat) => {
    setactiveTab(cat);
  };
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

    if (prodData.length !== 0) {
      var arr = [];

      // Find the selected category in prodData
      const selectedCategory = prodData.find((item) => item.cat_name === activeTab);

      if (selectedCategory && selectedCategory.products && selectedCategory.products.length !== 0) {
        // Process products for the selected category
        selectedCategory.products.forEach((product) => {
          arr.push({ ...product, parentCatName: selectedCategory.cat_name, subCatName: selectedCategory.cat_name });
        });

        // Set active tab data
        setActiveTabData(arr);

        // Optionally, set loading state
        setIsLoadingProducts(false);

        console.log("Setting Active Tab Data:", arr);
      } else {
        console.log("No data to process");
      }
    }
  }, [activeTab, prodData]);

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
                      handleCategoryClick(cat)
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
        
        {
          activeTabData.length !== 0 &&
          activeTabData.map((item, index) => (
            <div className='item ' key={index}>
              <Product tag={item.type} item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomeProduct;
