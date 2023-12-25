"use client";
import { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubmenuDropdown from "./SubmenuDropdown/SubmenuDropdown";
import useOutsideClick from "@/CustomHook/useOutsideClick";

const navItems = [
  "Deals",
  {
    label: "Home",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu1" },
      { label: "Submenu2" },
      { label: "Submenu3" },
    ],
  },
  "About",
  {
    label: "Shop",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu4" },
      { label: "Submenu5" },
      { label: "Submenu6" },
    ],
  },
  {
    label: "Vendors",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu7" },
      { label: "Submenu8" },
      { label: "Submenu9" },
    ],
  },
  {
    label: "Mega Menu",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu10" },
      { label: "Submenu11" },
      { label: "Submenu12" },
    ],
  },
  {
    label: "Blog",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu13" },
      { label: "Submenu14" },
      { label: "Submenu15" },
    ],
  },
  {
    label: "Pages",
    hasSubmenu: true,
    submenuData: [
      { label: "Submenu16" },
      { label: "Submenu17" },
      { label: "Submenu18" },
    ],
  },
  "Contact",
];

const NavigationLinks = () => {
  const [subDropdowns, setSubDropdowns] = useState(
    Array(navItems.length).fill(false)
  );
  const dropdownRef = useRef(null);

  const subDropdownHandler = (index) => {
    const newSubDropdowns = [...subDropdowns];
    newSubDropdowns[index] = !newSubDropdowns[index];
    setSubDropdowns(newSubDropdowns);
  };

  const closeDropdown = () => {
    setSubDropdowns(Array(navItems.length).fill(false)); // Set to array of false
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div className="flex justify-center text-gray-700 items-center w-full">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer  transition duration-300 px-[6px] ${
            index === 0 ? "border-none" : "border-l border-gray-700"
          }`}
        >
          {typeof item === "object" && item.hasSubmenu ? (
            <div className="">
              <div
                ref={dropdownRef}
                className="text-white hover:text-blue-400 whitespace-nowrap relative"
                onClick={() => subDropdownHandler(index)}
              >
                {item.label}
                <KeyboardArrowDownIcon />
              </div>
              {subDropdowns[index] && (
                <SubmenuDropdown submenuData={item.submenuData} />
              )}
            </div>
          ) : (
            <div className="text-white hover:text-blue-400">{item}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;
