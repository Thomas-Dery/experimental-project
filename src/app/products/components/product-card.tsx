"use client";
import React from "react";

import { useProduct } from "@/hooks/useProduct";
import { ProductCardProps } from "@/interfaces/ProductInterfaces";
import { ProductImage } from "@/app/products/components/ProductImage";
import { ProductName } from "@/app/products/components/ProductName";
import { ProductDescription } from "@/app/products/components/ProductDescription";
import { ProductPrice } from "@/app/products/components/ProductPrice";
import { ProductButtons } from "@/app/products/components/ProductButtons";

export const ProductCard = ({ product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className="flex flex-col justify-center items-center bg-white w-[250px] h-[250px] py-3 rounded-[20px] border-[3px] border-red-800">
      <div className="">
        <ProductImage image={product.image} />
      </div>
      <ProductName name={product.name} />
      <ProductDescription description={product.description} />
      <ProductPrice price={product.price} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};

export default ProductCard;
