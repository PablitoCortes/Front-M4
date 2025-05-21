"use client"
import { Product } from "@/interfaces/Product";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/UserContext";
import { toast } from "react-toastify";
import { Button } from "../ui/Button";

const ProductCard = ({ product }: { product: Product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const isInCart = cart.some((p) => p.id === product.id);

  const handleBuy = (product: Product) => {
    if (!user) {
      alert('Por favor inicia sesión para agregar al carrito');
    }
    if (cart.some((p) => p.id === product.id)) {
      toast.error('Producto ya está en el carrito');
      return;
    }
    setCart([...cart, product]);
    toast.success('Producto agregado al carrito');
  };

  return (

    <div className="flex flex-col w-[200px] h-[310px] rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="relative w-full h-[160px] overflow-hidden rounded-t-xl bg-gray-50">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h2>
          <p className="mt-1 text-xl font-bold text-primary">${product.price.toLocaleString()}</p>
        </div>
        {isInCart && product.stock > 0 ? (
          <Button
            variant="primary"
            onClick={() => handleBuy(product)}
            disabled={product.stock === 0}
          >
            in cart
            <ShoppingBag className="h-4 w-4 mr-2" />
          </Button>
        ) : (
          <Button
            variant="primary"
            disabled={product.stock === 0}
            onClick={() => handleBuy(product)}
          >
            {product.stock > 0 ? "Add to cart" : "No stock"}
            <ShoppingBag className="h-4 w-4 mr-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard
