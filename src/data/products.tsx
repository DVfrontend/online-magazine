'use client'

import type { Product } from "@/types";

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div>
      <ul className="list-disc">
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.title}</b> — {product.description} {product.price} {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
