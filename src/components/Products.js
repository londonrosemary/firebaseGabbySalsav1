import React, { useState, useEffect } from "react";
import Header from "./Header";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase.js";
import ProductCard from "./ProductCard";

export default function Products({ handleAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "products"), (snapshot) =>
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div>
      <Header />
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
}
