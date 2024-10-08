import React from "react";
import { ProductCard } from "./components/product-card";
import { PRODUCTS_LIST } from "@/config/product-list";

const ProductPage = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-10">
        {PRODUCTS_LIST.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
