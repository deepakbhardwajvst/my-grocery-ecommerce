"use client";
import { useEffect, useRef, useState } from "react";
import "./DropdownSearch.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useOutsideClick from "@/CustomHook/useOutsideClick";

const DropdownSearch = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(0);
  const [selectedCategoriesName, setSelectedCategoriesName] = useState(
    props.frontHeading
  );
  const [dataAndSearchResult, setDataAndSearchResult] = useState(props.data);
  const dropdownRef = useRef(null);
  const storingData = props.data;
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const dropdownHandlerClose = (name, index) => {
    setSelectedCategories(index);
    setDropdown(false);
    setSelectedCategoriesName(name);
  };

  //   <---- for hiding dropdown menu
  const closeDropdown = () => setDropdown(false);

  // Useing the custom hook
  useOutsideClick(dropdownRef, closeDropdown);
  //    for hiding dropdown menu ---->
  // For Search Result
  const filterList = (e) => {
    const inputResult = e.target.value.toLowerCase();
    const filterResult = storingData.filter((item) => {
      return item.toLowerCase().includes(inputResult);
    });
    const searchResult = filterResult.filter((item, index) => {
      return filterResult.indexOf(item) === index;
    });
    setDataAndSearchResult(searchResult);
    console.log(searchResult);
  };

  return (
    <div
      className="ds-wrapper pr-1 whitespace-nowrap text-black w-full flex relative z-10"
      ref={dropdownRef}
    >
      <div className="w-full" onClick={dropdownHandler}>
        {props.icon}
        {selectedCategoriesName.length > 14
          ? selectedCategoriesName.substr(0, 14) + "..."
          : selectedCategoriesName}
      </div>
      {dropdown === true && (
        <div className="DropdownSearch absolute w-52 h-auto rounded-xl top-[100%] left-[-10px] bg-white shadow-md py-3 pr-2">
          <div className="ds-search-box">
            <input
              type="search"
              className="ds-input w-full rounded-md ml-1 py-1 px-1.5 outline-none"
              onChange={filterList}
              placeholder="Search categories"
            />
          </div>
          <div className="ds-categories mt-2">
            <ul className="ds-categories-list w-full ml-1 py-2.5 px-0 max-h-[300px] overflow-y-scroll overflow-x-hidden">
              {/* category list items */}
              <li
                className={`ds-categories-list-item hover:bg-[#3b82f6] text-[16px] w-full p-2.5 ${
                  selectedCategories === 0
                    ? "ds-li-select bg-[#f0f0f0]  font-bold"
                    : ""
                } `}
                onClick={() => dropdownHandlerClose(selectedCategoriesName, 0)}
              >
                {selectedCategoriesName}
              </li>
              {dataAndSearchResult.map((categoryname, index) => {
                return (
                  <li
                    key={index}
                    className={`ds-categories-list-item hover:bg-[#3b82f6] text-[16px] w-full p-2.5 ${
                      selectedCategories === index + 1
                        ? "ds-li-select bg-[#f0f0f0]  font-bold"
                        : ""
                    } `}
                    onClick={() =>
                      dropdownHandlerClose(categoryname, index + 1)
                    }
                  >
                    {categoryname}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <span>
        {dropdown === false ? (
          <KeyboardArrowDownIcon className="text-black pr-2 " />
        ) : (
          <KeyboardArrowUpIcon className="text-black pr-2 " />
        )}
      </span>
    </div>
  );
};

export default DropdownSearch;
