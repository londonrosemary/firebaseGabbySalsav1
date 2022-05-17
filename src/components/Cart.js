import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Button, Card } from "react-bootstrap";

export default function Cart({ cartItems, onAdd, onRemove }) {
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
      <br />
      <br />
      <div className="cart">
        {localStorage.length === 0 && <div>Cart is empty</div>}
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
                <Card.Text> x {item.quantity}</Card.Text>
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
    </div>
  );
}
