"use client";
import { useState, useRef } from "react";
import AccountBoxDropdown from "./AccountBoxDropdown/AccountBoxDropdown";
import useOutsideClick from "@/CustomHook/useOutsideClick";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const Account = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);

  const accountDropdownHandler = () => {
    setAccountDropdown(!accountDropdown);
  };

  //   <---- for hiding dropdown menu
  const dropdownRef = useRef(null);
  const closeDropdown = () => setAccountDropdown(false); // Fix here

  // Useing the custom hook
  useOutsideClick(dropdownRef, closeDropdown);
  //    for hiding dropdown menu ---->

  return (
    <div
      className="accountbox-item "
      onClick={accountDropdownHandler}
      ref={dropdownRef}
    >
      <Person2OutlinedIcon className=" accountbox-img" />

      <p className=" accountbox-text">Account</p>
      {accountDropdown && <AccountBoxDropdown />}
    </div>
  );
};

export default Account;
