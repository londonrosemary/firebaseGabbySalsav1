import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="productImg" src={product.image} alt={product.name} />
          <div className="productName" key={product.id}>
            {product.name}
            <br />
          </div>
          <br />
        </div>
        <div className="flip-card-back">
          <br />
          <div>
            {product.description}
            <br />
          </div>
          <br />
          <div>
            ${product.price}
            <br />
          </div>
          <br />
          <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
