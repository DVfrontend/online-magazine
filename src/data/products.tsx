"use client";

import type { Product } from "@/types";
import { useEffect, useState } from "react";
import data from './product.json'

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div>
      <ul className="list-disc">
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.title}</b> — {product.description} {product.price}{" "}
            {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
