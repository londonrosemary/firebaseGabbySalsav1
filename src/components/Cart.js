import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button, Card } from "react-bootstrap";

export default function Cart({ cartItems, onAdd, onRemove }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setItems(items);
    }
  }, [cartItems]);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

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
          {items.length === "" && <div>Cart is empty</div>}
          {items.map((item) => {
            return (
              <div className="cartCards">
                <Card
                  key={item.id}
                  style={{ width: "18rem" }}
                  className="cartCards"
                >
                  <Card.Title>{item.name}</Card.Title>
                  <img src={item.image} className="itemImage" />
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
        <div className="orderSubmit">
          <Button>Submit your order request!</Button>
        </div>
        <div>Total Cost: ${itemsPrice.toFixed(2)}</div>
      </div>
    );
  }
}
