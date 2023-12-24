import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";

const BrowseCategories = () => {
  return (
    <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
      <GridViewIcon className="text-lg" />
      <span className="ml-2 whitespace-nowrap">Browse All Categories</span>
    </button>
  );
};

export default BrowseCategories;
