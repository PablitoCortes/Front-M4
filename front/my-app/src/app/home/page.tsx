"use client";
import { useContext } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Hero } from "@/components/Hero/Hero";
import { ProductsContext } from "@/context/ProductsContext";

const Page = () => {
  const { filteredProducts, searchTerm } = useContext(ProductsContext);

  return (
    <div className="w-full">
      <Hero />
      <div className="py-16 bg-background" data-section="products">
        <div className=" px-4 mt-5">
          <h2 className="text-4xl font-bold text-center">
            {searchTerm ? `Search results for: ${searchTerm}` : "Our Products"}
          </h2>
          <div className="flex justify-evenly mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500">No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
