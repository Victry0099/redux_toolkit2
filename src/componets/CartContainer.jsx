import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, calculateTotal } from "../cart/cartSlice";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <div>
        <h1>Your Bag is empty</h1>
      </div>
    );
  }

  return (
    <section>
      <div>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <p> total is :{total.toFixed(1)}</p>
      </div>
      <button
        style={{ height: "30px", color: "red", fontSize: "20px" }}
        onClick={() => dispatch(clearCart())}
      >
        All Items Clear
      </button>
    </section>
  );
};

export default CartContainer;
