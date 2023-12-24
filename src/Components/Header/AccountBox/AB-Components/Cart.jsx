import CartDropdown from "./CartDropdown/CartDropdown";

const Cart = () => {
  return (
    <div className="accountbox-item">
      <img src="./images/icon-cart.svg" alt="" className="accountbox-img " />
      <span className="accountbox-span">2</span>
      <p className="accountbox-text">Cart</p>
      {/* <CartDropdown /> */}
    </div>
  );
};

export default Cart;
