import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button, Card } from "react-bootstrap";

export default function Cart({
  setCartItems,
  cartItems,
  onAdd,
  onRemove,
  notify,
}) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cartItems"));
  //   if (cartItems) {
  //     setItems(items);
  //   }
  // }, [cartItems]);

  const getTotalSum = () => {
    return cartItems.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  function deleteItem() {
    localStorage.removeItem("cartItems");
    window.location.reload();
  }
  console.log(items);
  if (items === "0" || items === null) {
    return (
      <div>
        <Header /> <div className="cart">Cart is empty</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <br />
        <br />
        <div className="cart">
          {cartItems.map((item) => {
            return (
              <div className="cartCards">
                <Card
                  key={item.id}
                  style={{ width: "18rem" }}
                  className="cartCards"
                >
                  <Card.Title>{item.name}</Card.Title>
                  <img src={item.image} className="itemImage" alt={item.name} />
                  <Card.Text>
                    {item.quantity} x ${item.price}
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onAdd(item)}
                    >
                      {" "}
                      +{" "}
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onRemove(item)}
                    >
                      {" "}
                      -{" "}
                    </Button>
                  </div>
                  <br />
                  <br />
                </Card>
              </div>
            );
          })}
        </div>
        <div className="orderSubmit">Total Price: ${getTotalSum()}</div>
        <div className="orderSubmit">
          <Button variant="outline-primary">Submit your order request!</Button>

          <br />
          <br />
          <Button variant="outline-secondary" onClick={() => deleteItem()}>
            Empty Cart
          </Button>
        </div>
      </div>
    );
  }
}
