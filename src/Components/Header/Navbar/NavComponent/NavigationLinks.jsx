import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const navItems = [
  "Deals",
  { label: "Home", hasSubmenu: true },
  "About",
  { label: "Shop", hasSubmenu: true },
  { label: "Vendors", hasSubmenu: true },
  { label: "Mega menu", hasSubmenu: true },
  { label: "Blog", hasSubmenu: true },
  { label: "Pages", hasSubmenu: true },
  "Contact",
];

const NavigationLinks = () => {
  return (
    <div className="flex justify-center text-gray-700 items-center">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer  transition duration-300 px-[6px] ${
            index === 0 ? "border-none" : "border-l border-gray-700"
          }`}
        >
          {typeof item === "object" && item.hasSubmenu ? (
            <div className="text-white hover:text-blue-400 whitespace-nowrap ">
              {item.label}
              <KeyboardArrowDownIcon />
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
