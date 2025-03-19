import React, { FC } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductsProps = {
  products: Product[];
};

export const getServerSideProps: GetServerSideProps<ProductsProps> = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const products: Product[] = await res.json();
    return { props: { products } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { products: [] } };
  }
};

const Products: FC<ProductsProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div className="p-6"><p className="text-lg">No products available.</p></div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="object-contain mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
