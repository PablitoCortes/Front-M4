"use client"

import CartProvider from "@/context/cartContext"
import { ProductsProvider } from "@/context/ProductsContext"
import UserProvider from "@/context/UserContext"



export default function Contexts({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <CartProvider>
        <ProductsProvider>
          {children}
        </ProductsProvider>
      </CartProvider>
    </UserProvider>
  )
}