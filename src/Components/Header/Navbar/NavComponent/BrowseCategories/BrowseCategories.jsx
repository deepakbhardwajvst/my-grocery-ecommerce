import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";

const BrowseCategories = () => {
  return (
    <button className="flex items-center bg1 color1  py-2 px-4 rounded-md transition duration-300 ease-in-out bg1hover border1 focus:outline-none focus:ring focus:border-blue-950 w-full">
      <GridViewIcon className="text-lg" />
      <span className="ml-2 whitespace-nowrap">Browse All Categories</span>
    </button>
  );
};

export default BrowseCategories;
