import Account from "./AB-Components/Account";
import Cart from "./AB-Components/Cart";
import Compare from "./AB-Components/Compare.jsx";
import Wishlist from "./AB-Components/Wishlist";

const AccountBox = () => {
  return (
    <div className="flex justify-between">
      <Compare />
      <Wishlist />
      <Cart />
      <Account />
    </div>
  );
};

export default AccountBox;
