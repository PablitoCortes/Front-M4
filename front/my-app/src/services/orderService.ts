const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { sampleProducts } from "@/utils/sampleProducts";

export const createOrder = async (
  userId: number,
  products: number[],
  token: string
) => {
  // Separar productos del backend y productos de muestra
  const backendProducts = products.filter((id) => id <= 6); // IDs del 1 al 6 son productos del backend
  const sampleProductsIds = products.filter((id) => id > 6); // IDs mayores a 6 son productos de muestra

  // Crear la orden con los productos del backend
  let orderData;
  if (backendProducts.length > 0) {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        userId,
        products: backendProducts,
      }),
    });
    orderData = await res.json();
  }

  // Agregar productos de muestra a la orden
  if (sampleProductsIds.length > 0) {
    const sampleProductsInOrder = sampleProductsIds
      .map((id) => sampleProducts.find((p) => p.id === id))
      .filter(Boolean);

    if (!orderData) {
      // Si no hay productos del backend, crear una orden local
      orderData = {
        id: Date.now(), // ID temporal
        status: "approved",
        date: new Date().toISOString(),
        products: sampleProductsInOrder,
      };
    } else {
      // Si hay productos del backend, agregar los productos de muestra
      orderData.products = [...orderData.products, ...sampleProductsInOrder];
    }
  }

  return orderData;
};
