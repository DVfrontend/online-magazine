'use client'

import data from "@/data/product.json";
import { useEffect, useState } from "react";
import type { Product } from "@/types";


function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Проекты</h1>
      <ul className="list-disc">
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.title}</b> — {product.description} {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products