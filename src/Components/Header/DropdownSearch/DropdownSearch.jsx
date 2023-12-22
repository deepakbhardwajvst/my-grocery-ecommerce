"use client";
import { useEffect, useRef, useState } from "react";
import "./DropdownSearch.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DropdownSearch = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(0);
  const [selectedCategoriesName, setSelectedCategoriesName] = useState(
    props.frontHeading
  );
  const dropdownref = useRef();

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  const dropdownHandlerClose = (name, index) => {
    setSelectedCategories(index);
    setDropdown(false);
    setSelectedCategoriesName(name);
  };

  //   <---- for hiding dropdown menu
  const clickOutSide = (event) => {
    if (dropdownref.current && !dropdownref.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutSide);

    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, []);
  //    for hiding dropdown menu ---->
  return (
    <div
      ref={dropdownref}
      className="ds-wrapper pr-1 whitespace-nowrap text-black w-full flex relative"
    >
      <div className="w-full" onClick={dropdownHandler}>
        {props.icon}
        {selectedCategoriesName}
      </div>
      {dropdown === true && (
        <div className="DropdownSearch absolute w-52 h-auto rounded-xl top-[100%] left-[-10px] bg-white shadow-md py-3 pr-2">
          <div className="ds-search-box">
            <input
              type="search"
              className="ds-input w-full rounded-md ml-1 py-1 px-1.5 outline-none"
              placeholder="Search categories"
            />
          </div>
          <div className="ds-categories mt-2">
            <ul className="ds-categories-list w-full ml-1 py-2.5 px-0 max-h-[300px] overflow-y-scroll overflow-x-hidden">
              {/* category list items */}
              <li
                className={`ds-categories-list-item hover:bg-[aqua] text-[16px] w-full p-2.5 ${
                  selectedCategories === 0
                    ? "ds-li-select bg-[#f0f0f0]  font-bold"
                    : ""
                } `}
                onClick={() => dropdownHandlerClose(selectedCategoriesName, 0)}
              >
                {selectedCategoriesName}
              </li>
              {props.data.map((categoryname, index) => {
                return (
                  <li
                    key={index}
                    className={`ds-categories-list-item hover:bg-[aqua] text-[16px] w-full p-2.5 ${
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
