"use client"
import { Product } from "@/interfaces/Product";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/UserContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProduct } from "@/services/productService";
import { sampleProducts } from "@/utils/sampleProducts";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Props = {
 params: {
  id: string;
 };
 searchParams: { [key: string]: string | string[] | undefined };
};

const Page = ({ params }: Props) => {
 const { id } = params;
 const [product, setProduct] = useState<Product | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const { cart, setCart } = useContext(CartContext);
 const { user } = useContext(UserContext);

 const isInCart = cart.some((p) => p.id === parseInt(id));

 useEffect(() => {
  const fetchProduct = async () => {
   setIsLoading(true);
   try {
    const data = await getProduct(id);
    if (!data) {
     const sampleProduct = sampleProducts.find((p) => p.id === parseInt(id));
     if (sampleProduct) {
      setProduct(sampleProduct);
     } else {
      toast.error('Producto no encontrado');
     }
    } else {
     setProduct(data);
    }
   } catch (error) {
    console.error('Error al cargar el producto:', error);
    const sampleProduct = sampleProducts.find((p) => p.id === parseInt(id));
    if (sampleProduct) {
     setProduct(sampleProduct);
    } else {
     toast.error('Error al cargar el producto');
    }
   } finally {
    setIsLoading(false);
   }
  };

  if (id) {
   fetchProduct();
  }
 }, [id]);

 const handleBuy = (product: Product) => {
  if (!product) return;

  if (!user) {
   toast.warning('Por favor inicia sesión para agregar al carrito');
   return;
  }

  if (isInCart) {
   toast.info('Este producto ya está en tu carrito');
   return;
  }

  setCart([...cart, product]);
  toast.success('Producto agregado al carrito');
 };

 if (isLoading) {
  return (
   <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
   </div>
  );
 }

 if (!product) {
  return (
   <div className="flex justify-center items-center min-h-screen">
    <div className="text-center">
     <h2 className="text-2xl font-bold text-gray-800 mb-2">Producto no encontrado</h2>
     <p className="text-gray-600">Lo sentimos, el producto que buscas no existe.</p>
    </div>
   </div>
  );
 }

 return (
  <div className="container mx-auto px-4 py-8">
   <ToastContainer autoClose={2000} />
   <div className="flex flex-col md:flex-row gap-8">
    <div className="w-full md:w-1/2">
     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {product.image && (
       <div className="relative aspect-square">
        <Image
         src={product.image}
         alt={product.name || 'Imagen del producto'}
         fill
         className="object-cover"
         sizes="(max-width: 768px) 100vw, 50vw"
         priority
        />
       </div>
      )}
     </div>
    </div>

    <div className="w-full md:w-1/2 space-y-6">
     <div className="bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
      <p className="text-gray-600 text-lg mb-6">{product.description}</p>

      <div className="border-t border-gray-200 pt-4">
       <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Precio:</span>
        <span className="text-2xl font-bold text-primary">${product.price}</span>
       </div>

       <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Envío:</span>
        <span className="text-green-600 font-medium">Gratis</span>
       </div>

       <div className="mt-6 flex justify-end">
        <Button
         onClick={() => handleBuy(product)}
         variant="unique"
         disabled={isInCart}
        >
         {isInCart ? 'Ya en el carrito' : 'Agregar al carrito'}
        </Button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Page;