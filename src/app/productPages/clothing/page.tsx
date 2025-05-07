"use client";

import { useEffect, useState } from "react";
import Products from "@/data/products";
import data from "@/data/products.json";
import type { Product } from "@/types";

export default function Tools() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = data.filter(
      (product) => product.category === "Одежда/Обувь",
    );
    setFilteredProducts(filtered);
  }, []);

  return (
    <div>
      <Products products={filteredProducts} />
    </div>
  );
}
