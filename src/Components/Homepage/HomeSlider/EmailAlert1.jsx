import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Button } from "@mui/material";

const EmailAlert1 = () => {
  return (
    <div className="ea  bottom-28 left-[7%]  z-10  max-w-[500px] h-16 bg-gray-800 flex items-center rounded-full pl-3">
      <SendOutlinedIcon className="left-9 top-7 z-10 text-2xl rotate-[-45deg] opacity-50 " />
      <input
        type="text"
        placeholder="Your email address"
        className="w-full  color1 bg-gray-800  border-0 outline-none pl-4 text-lg"
      />
      <Button className="top-0 right-0 h-full px-12 rounded-full bg-gray-600 color1 text-lg capitalize font-normal my-2">
        Subscribe
      </Button>
    </div>
  );
};

export default EmailAlert1;
