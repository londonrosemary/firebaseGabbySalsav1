import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Card } from "react-bootstrap";

export default function Cart({ cartItems, onAdd }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setItems(items);
    }
  }, [cartItems]);
  console.log(items);
  return (
    <div>
      <Header />
      Cart
      <br />
      <br />
      {localStorage.length === 0 && <div>Cart is empty</div>}
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            {/* button onClick={() => onAdd(item)}> Add to Cart</button>; */}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
