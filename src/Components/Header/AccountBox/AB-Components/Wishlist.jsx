import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Wishlist = () => {
  return (
    <div className="accountbox-item">
      <FavoriteBorderIcon className="accountbox-img" />
      <span className="accountbox-span">1</span>
      <p className="accountbox-text">Wishlist</p>
    </div>
  );
};

export default Wishlist;
