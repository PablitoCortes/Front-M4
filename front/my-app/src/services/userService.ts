import { UserRegister } from "@/interfaces/User";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const userLogin = async (email: string, password: string) => {
  const response = await fetch(`${apiUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};

export const userRegister = async (userData: UserRegister) => {
  const { name, email, password, phone, address } = userData;

  if (!name) throw new Error("Name is required.");
  if (!email) throw new Error("Email is required.");
  if (!password) throw new Error("Password is required.");
  if (!phone) throw new Error("Phone is required.");
  if (!address) throw new Error("Address is required.");

  if (typeof phone !== "number") {
    throw new Error("Phone number must be a number");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
  const response = await fetch(`${apiUrl}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, phone, address }),
  });
  const data = await response.json();
  return data;
};

export const userOrders = async (token: string) => {
  try {
    const response = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: { Authorization: token },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user orders:", error);
    throw error;
  }
};
