import { Order } from "./Order";

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  name: string;
  address: string;
  phone: number;
}

export interface User {
  login: boolean;
  user: UserData;
  token: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: number;
  role: string;
  credential: Credential;
  orders: Order[];
}

export interface Credential {
  id: number;
  password: string;
}
