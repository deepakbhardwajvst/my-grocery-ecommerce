import CartDropdown from "./CartDropdown/CartDropdown";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const Cart = () => {
  return (
    <div className="accountbox-item ">
      <ShoppingCartCheckoutIcon className="accountbox-img " />

      <span className="accountbox-span">2</span>
      <p className="accountbox-text">Cart</p>
      {/* <CartDropdown /> */}
    </div>
  );
};

export default Cart;
