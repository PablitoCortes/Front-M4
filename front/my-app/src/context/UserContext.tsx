"use client";
import { createContext, useEffect, useState } from "react";
import { User } from "@/interfaces/User";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

//crear contexto

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => { },
  logout: () => { },
});

//crear provider

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  //Dentro del provider generar estados
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const parsedUser = JSON.parse(localUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error al cargar el usuario:', error);
      localStorage.removeItem("user");
    }
  }, []);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
