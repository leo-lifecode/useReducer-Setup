import { useCart, useCartReducer } from "../ContextReducer/CartReducer";

function Navbar() {
  const cartState = useCart();
  const dispatch = useCartReducer();

  return (
    <div>
      Navbar
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: 1 })}>
        addtocart
      </button>
      <div>{cartState.cart}</div>
    </div>
  );
}

export default Navbar;
