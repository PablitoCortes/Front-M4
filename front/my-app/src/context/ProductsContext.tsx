"use client"

import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/interfaces/Product";
import { getProducts } from "@/services/productService";
import { sampleProducts } from "@/utils/sampleProducts";

interface ProductsContextType {
    products: Product[];
    setProducts: (products: Product[]) => void;
    filteredProducts: Product[];
    setFilteredProducts: (products: Product[]) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    isLoading: boolean;
}

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => { },
    filteredProducts: [],
    setFilteredProducts: () => { },
    searchTerm: "",
    setSearchTerm: () => { },
    isLoading: true
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const apiProducts = await getProducts();
                const allProducts = [...apiProducts, ...sampleProducts];
                setProducts(allProducts);
                setFilteredProducts(allProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts(sampleProducts);
                setFilteredProducts(sampleProducts);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            if (searchTerm) {
                const filtered = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts(products);
            }
        }
    }, [searchTerm, products, isLoading]);

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                filteredProducts,
                setFilteredProducts,
                searchTerm,
                setSearchTerm,
                isLoading
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};


