"use client";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/userService";
import { UserContext } from "@/context/UserContext";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response;
    try {
      response = await userLogin(loginData.email, loginData.password);
      if (!response.message) {
        toast.success("Login successful!");
        setUser(response);
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error(error);
    } finally {
      if (response && !response.message) {
        router.push("/");
      }
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    if (name === "email" && (!value.includes("@") && !value.includes("."))) {
      setEmailError("Email");
      return;
    }
    setEmailError("");
    if (name === "password" && value.length === 0) {
      setPasswordError("Password");
      return;
    }
    setPasswordError("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F1ECFF] to-[#E4EBFD] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">

        </p>
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
              onChange={handleInputChange}
            />
            {
              emailError && emailError === "Email" ? (
                <small className="text-red-500">{`${emailError} is invalid or missing`}</small>
              ) : (
                <></>
              )
            }
          </div >

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
            {
              passwordError && passwordError === "Password" ? (
                <small className="text-red-500">{`${passwordError} is invalid or missing`}</small>
              ) : (
                <></>
              )
            }
          </div >
          <div className="flex flex-row-reverse justify-between items-center">
            <Button variant="unique" size="xl" type="submit">
              Login
            </ Button>
            <p className="mt-6 text-sm text-center text-gray-500">
              Don't have an account?
              <Link href="/register" className="text-primary font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </form >

      </div >
    </div >
  );
};

export default Login;
