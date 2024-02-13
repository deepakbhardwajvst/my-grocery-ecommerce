"use client"
import { useState,useEffect } from "react";
import data from "@/Data/data";

import Card from "./Card/Card";

const HomeProduct = (props) => {
  const [prodData, setprodData] = useState(props.data)
  const [catArray, setcatArray] = useState([])
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
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
    prodData.length !== 0 &&
      prodData.map((item) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catArr.push(item_.cat_name);
          })
      })
    const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
    setcatArray(list2)
    setactiveTab(list2[0])
    window.scrollTo(0, 0);
  }, [])
  useEffect(() => {
    var arr = [];
    setActiveTabData(arr);
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        item.items.map((item_, index_) => {
          if (item_.cat_name === activeTab) {
            {
              item_.products.length !== 0 &&
                item_.products.map((product) => {
                  arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                })

              setActiveTabData(arr)
              setTimeout(() => {
                setIsLoadingProducts(false);
              }, [1000]);
            }
          }
        })

      })

  }, [activeTab, activeTabData])





  const bestSellsArr = [];

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item) => {
        if (item.cat_name === "Electronics") {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              item_.products.length !== 0 &&
                item_.products.map((product, index) => {
                  bestSellsArr.push(product);
                })
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
                <li className="list list-inline-item">
                  <a className={`cursor text-capitalize 
                    ${activeTabIndex === index ? 'act' : ''}`}
                    onClick={() => {
                      setactiveTab(cat)
                      setactiveTabIndex(index);
                      productRow.current.scrollLeft = 0;
                      setIsLoadingProducts(true);
                    }}
                  >
                    {cat}
                  </a>
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
