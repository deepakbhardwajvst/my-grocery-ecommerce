"use client";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubmenuDropdown from "./SubmenuDropdown/SubmenuDropdown";
import useOutsideClick from "@/CustomHook/useOutsideClick";
import axios from "axios";
import { Button } from '@mui/material';

const navItems = [

  {
    label: "Home",
    hasSubmenu: true,
    items: [
      { cat_name: "Submenu1" },
      { cat_name: "Submenu2" },
      { cat_name: "Submenu3" },
    ],
  },
  "About",
  {
    label: "Shop",
    hasSubmenu: true,
    items: [
      { cat_name: "Submenu4" },
      { cat_name: "Submenu5" },
      { cat_name: "Submenu6" },
    ],
  },


  {
    label: "Blog",
    hasSubmenu: true,
    items: [
      { cat_name: "Submenu13" },
      { cat_name: "Submenu14" },
      { cat_name: "Submenu15" },
    ],
  },

  "Contact",
];

const NavigationLinks = () => {
  const [navData, setNavData] = useState([]);
  const [subDropdowns, setSubDropdowns] = useState(
    Array(navItems.length).fill(false)
  );
  const dropdownRef = useRef(null);
  useEffect(() => {
    getData1('http://localhost:3000/productData')
  }, [])
  const getData1 = async (url) => {
    try {
      await axios.get(url).then((res) => {

        setNavData(res.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  const subDropdownHandler = (identifier) => {
    const newSubDropdowns = [...subDropdowns];
    const index = identifier;
    newSubDropdowns[index] = !newSubDropdowns[index];
    setSubDropdowns(newSubDropdowns);
  };

  const closeDropdown = () => {
    setSubDropdowns(Array(navItems.length).fill(false)); // Set to array of false
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div className="flex justify-center color1 items-center w-full pl-5">
      {navItems.map((item, index) => (
        <div
          key={`navItems-${index}`}
          className={`flex items-center cursor-pointer transition duration-300 px-[6px] ${index === 0 ? "border-none" : "border-l border-gray-700"
            }`}
        >
          {typeof item === "object" && item.hasSubmenu ? (
            <div className="">
              <Button><div
                ref={dropdownRef}
                className="color1 hover:text-[#c8e0e8] hover:scale-110 whitespace-nowrap relative px-2"
                onClick={() => subDropdownHandler(index)}
              >
                {item.label}
                <KeyboardArrowDownIcon className="color1 opacity-50 mb-1" />
              </div></Button>
              {subDropdowns[index] && (
                <SubmenuDropdown submenuData={item.items} />
              )}
            </div>
          ) : (
            <Button> <div className="color1 hover:text-gray-300">{item}</div></Button>
          )}
        </div>
      ))}

      {navData.map((item, index) => (
        <div key={`navData-${index}`} className={`flex items-center cursor-pointer transition duration-300 px-[6px] border-l border-gray-700
          `}>
          <div >
            <Button
              ref={dropdownRef}
              className="color1 hover:text-[#c8e0e8] hover:scale-110 whitespace-nowrap relative px-2 "
              onClick={() => subDropdownHandler(`navData-${index}`)}
            >
              {item.cat_name} <KeyboardArrowDownIcon className="color1 opacity-50 mb-1" />
            </Button>
            {subDropdowns[`navData-${index}`] && item.items && (
              <SubmenuDropdown submenuData={item.items} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};



export default NavigationLinks;
