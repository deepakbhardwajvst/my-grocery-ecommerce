import React from "react";
import BrowseCategories from "./NavComponent/BrowseCategories/BrowseCategories";
import NavigationLinks from "./NavComponent/NavigationLinks/NavigationLinks";
import HotlineInfo from "./NavComponent/HotlineInfo/HotlineInfo";

const Navbar = () => {
  return (
    <div className="w-full border-y-[1px] border-gray-700 mt-4">
      <div className="flex justify-between py-2 container">
        <div className="flex justify-start w-85%">
          <div className=" min-w-[20%]">
            <BrowseCategories />
          </div>
          <div className="min-w-[65%] flex items-center ml-3">
            <NavigationLinks />
          </div>
        </div>
        <div className="w-[15%]  flex items-center">
          <HotlineInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
