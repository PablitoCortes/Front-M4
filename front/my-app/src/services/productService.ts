const apiUrl = process.env.NEXT_PUBLIC_API_URL;

import { changeImage } from "@/utils/ProductImages";
import { Product } from "../interfaces/Product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${apiUrl}/products`);
  const data = await response.json();
  changeImage(data);
  return data;
};

export const getProduct = async (id: string) => {
  const products = await getProducts();
  const res = products.filter((product) => product.id === parseInt(id))[0];
  return res;
};
