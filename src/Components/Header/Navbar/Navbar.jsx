import React from "react";
import BrowseCategories from "./NavComponent/BrowseCategories/BrowseCategories";
import NavigationLinks from "./NavComponent/NavigationLinks/NavigationLinks";
import HotlineInfo from "./NavComponent/HotlineInfo/HotlineInfo";

const Navbar = () => {
  return (
    <div className="w-full border-y-[1px] border-gray-700 mt-4">
      <div className="flex justify-between py-2    container">
        <div className="w-[20%]">
          <BrowseCategories />
        </div>
        <div className="w-[65%] flex items-center">
          <NavigationLinks />
        </div>
        <div className="w-[15%]  flex items-center">
          <HotlineInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
