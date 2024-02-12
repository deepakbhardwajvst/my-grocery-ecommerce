"use client"
import { useState } from "react";
import data from "@/Data/data";

import Card from "./Card/Card";

const HomeProduct = () => {
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
  var settings = {
    dots: false,
    infinite: context.windowWidth < 992 ? false : true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: context.windowWidth < 992 ? false : true,
  };
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
    setBestSells(bestSellsArr);
  }, [])




  return (
    <div className="home-product mt-6">
      <div className="hp-head-box flex justify-between items-center w-full">
        <h2 className="hp-heading w-[60%] text-3xl font-semibold">
          Popular Products
        </h2>
        <ul className="hp-head-items flex w-[40%] justify-between">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hp-head-item hover:text-gray-200 cursor-pointer whitespace-nowrap hover:scale-[1.2]"
            >
              {category}
            </li>
          ))}
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
