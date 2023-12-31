import React from "react";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const HotlineInfo = () => {
  return (
    <div className="flex items-center text-gray-700 cursor-pointer w-full justify-end">
      <span className=" text-blue-500">
        <HeadphonesOutlinedIcon className="text-3xl color1" />
      </span>
      <div className="ml-2 color1">
        <h3 className="text-[20px] font-bold color1">1900 - 888</h3>
        <p className="ml-1 text-[10px]">24/7 Support Center</p>
      </div>
    </div>
  );
};

export default HotlineInfo;
