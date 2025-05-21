"use client"

import { CartContext } from "@/context/cartContext"
import { useContext, useState } from "react"
import { createOrder } from "@/services/orderService"
import { UserContext } from "@/context/UserContext"
import Link from "next/link"
import Image from "next/image"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Modal from "@/components/Modal/Modal"
import ProtectedRoute from "@/components/ProtectedRoute/protectedRoute"



const Page = () => {

  const { user } = useContext(UserContext)
  const { cart, setCart, clearCart } = useContext(CartContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<number | null>(null)

  const cartToBack = cart.map((item) => {
    return item.id;
  });

  const subtotal = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemove = (id: number) => {
    setProductToDelete(id);
    setIsDeleteModalOpen(true);
  }

  const handleConfirmRemove = () => {
    if (productToDelete) {
      toast.error(`Product removed from cart`);
      setCart(cart.filter((product) => product.id !== productToDelete));
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    }
  }

  const handleCheckout = async () => {
    setIsModalOpen(true);
  };

  const handleConfirmCheckout = async () => {
    try {
      if (user && user.user.id) {
        const order = await createOrder(user.user.id, cartToBack, user.token);
        toast.success("¡Order created successfully!", {
          style:
          {
            color: "primary"
          }
        });

        if (!user.user.orders) {
          user.user.orders = [];
        }
        user.user.orders.push(order);
        localStorage.setItem("user", JSON.stringify(user));

        clearCart();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error creating order");
      setIsModalOpen(false);
    }
  };


  if (cart.length === 0) {
    return (

      <ProtectedRoute>
        <div className="min-w-[1200px]">
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <div className="text-center">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
              <p className="text-gray-600 mb-6">Add some products to continue</p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>
      </ProtectedRoute>
    )
  }
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Your cart ({cart.length} products)</h1>
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                    <p className="text-xl font-bold text-primary mt-1">${product.price}</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Summary of the purchase</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-lg font-semibold">${subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">${subtotal}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  variant="unique"
                  className="w-full mt-6"
                >
                  Proceed to payment
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmCheckout}
          title="Confirm purchase"
          message="Are you sure you want to make this purchase?"
          confirmText="Confirm purchase"
          cancelText="Cancel"
        />

        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setProductToDelete(null);
          }}
          onConfirm={handleConfirmRemove}
          title="Delete product"
          message="Are you sure you want to delete this product from your cart?"
          confirmText="Delete"
          cancelText="Cancel"
        />
      </div>
    </ProtectedRoute>
  )
}

export default Page