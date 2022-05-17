import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { Container } from "react-bootstrap";

export default function Products({ products, onAdd }) {
  return (
    <div>
      <Header />
      <br />
      <br />
      <Container>
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          );
        })}
      </Container>
    </div>
  );
}
