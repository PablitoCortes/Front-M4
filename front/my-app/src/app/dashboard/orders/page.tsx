"use client"

import { useContext, useEffect, useState } from "react"
import { UserContext } from "@/context/UserContext"
import { Order } from "@/interfaces/Order"
import { userOrders } from "@/services/userService"
import { Package, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { changeImage } from "@/utils/ProductImages"
import { Product } from "@/interfaces/Product"
import { Button } from "@/components/ui/Button"
import ProtectedRoute from "@/components/ProtectedRoute/protectedRoute"

const ITEMS_PER_PAGE = 5

const Orders = () => {
  const { user } = useContext(UserContext)
  const [orders, setOrders] = useState<Order[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.token) {
        try {
          const data = await userOrders(user.token)
          const processedOrders = data.map((order: Order) => ({
            ...order,
            products: order.products.map((product: Product) => {
              const processedProduct = { ...product }
              changeImage([processedProduct])
              return processedProduct
            })
          }))
          setOrders(processedOrders.reverse())
        } catch (error) {
          console.error("Error al cargar las órdenes:", error)
        }
      }
    }

    fetchOrders()
  }, [user])

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE)

  const currentOrders = orders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (orders.length === 0) {
    return (
      <ProtectedRoute>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">No orders yet</h1>
            <p className="text-gray-600 mb-6">You have not made any purchases yet</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

        <div className="space-y-6">

          {currentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Order #{order.id}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                      }`}>
                      {order.status === "approved"
                        ? "Approved"
                        : order.status === "pending"
                          ? "Pending"
                          : "Rejected"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain rounded-md"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-primary font-semibold">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="text-xl font-bold text-primary">
                      ${order.products.reduce((acc, product) => acc + product.price, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="ghost"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "unique" : "ghost"}
                  onClick={() => handlePageChange(page)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </ProtectedRoute>
  )
}

export default Orders