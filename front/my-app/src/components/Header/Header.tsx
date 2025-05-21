"use client"

import Link from "next/link"
import { UserContext } from "@/context/UserContext";
import { useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/cartContext";
import { ProductsContext } from "@/context/ProductsContext";
import { ShoppingCart, LogOut, User, Search } from "lucide-react";
import { Button } from "../ui/Button";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const { setSearchTerm, isLoading } = useContext(ProductsContext);
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    router.push('/');
  };

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    if (!isLoading) {
      setSearchTerm(value);
    }
  }, [setSearchTerm, isLoading]);

  return (
    <header className="sticky top-0 border-b bg-white shadow-sm z-50">
      <div className="container flex justify-between h-16 w-[90%] mx-auto p-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/home" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Softify</span>
          </Link>
          {user ? (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/dashboard/profile" className="transition-colors hover:text-foreground/80 text-foreground">
                Profile
              </Link>
              <Link href="/dashboard/orders" className="transition-colors hover:text-foreground/80 text-foreground">
                Orders
              </Link>
              <Link href="/cart" className="flex items-center gap-2 transition-colors hover:text-foreground/80 text-foreground">
                <ShoppingCart className="h-6 w-6" />
                {`${cart.length}`}
              </Link>
            </nav>
          ) : (
            <></>
          )}
        </div >
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="flex items-center gap-2 md:w-[300px] lg:w-[400px] bg-background border rounded px-2 py-1">
              <Search className="h-4 w-4" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-transparent outline-none border-none text-sm"
                value={localSearchTerm}
                onChange={handleSearch}
                disabled={isLoading}
              />
            </div>
          </div>
          <div className=" flex  items-center justify-end space-x-4">
            {user ? (
              <div className="flex items-center gap-2 pl-6">
                <User className="h-6 w-6" />
                <p>Welcome {user?.user.name}</p>
                <LogOut className="h-6 w-6 cursor-pointer" onClick={handleLogout} />
              </div>

            ) : (
              <>
                <Link href="/login">
                  <Button variant="primary">
                    Sign in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="secondary">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div >
    </header >
  )
};

export default Header;

