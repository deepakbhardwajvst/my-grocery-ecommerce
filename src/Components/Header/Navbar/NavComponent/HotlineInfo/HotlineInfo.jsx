import React from "react";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const HotlineInfo = () => {
  return (
    <div className="flex items-center text-gray-700 cursor-pointer w-full justify-end">
      <span className=" text-blue-500">
        <HeadphonesOutlinedIcon className="text-3xl text-white" />
      </span>
      <div className="ml-2 text-white">
        <h3 className="text-[20px] font-bold text-blue-500">1900 - 888</h3>
        <p className="ml-1 text-[10px]">24/7 Support Center</p>
      </div>
    </div>
  );
};

export default HotlineInfo;
