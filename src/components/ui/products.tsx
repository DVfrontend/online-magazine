"use client";

import type { Product } from "@/types";
import ButtonBuy from "./buttonBuy";

type ProductsProps = {
  products?: Product[];
};

function Products({ products = [] }: ProductsProps) {
  return (
    <div>
      <ul className="list-disc">
        {products.map((product) => (
          <li key={product.id}>
            <b>
              {product.title} {product.brand}
            </b>{" "}
            — {product.description} {product.price} {product.currency}
            <ButtonBuy />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;