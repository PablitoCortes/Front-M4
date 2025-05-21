"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/userService";
import { Button } from "@/components/ui/Button";

const Register = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: 0,
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userRegister({
        ...registerData,
        phone: Number(registerData.phone),
      });
      router.push("/login");
    } catch (err: any) {
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
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

    if (name === "name" && value.length === 0) {
      setNameError("Name");
      return;
    }
    setNameError("");
    if (name === "address" && value.length === 0) {
      setAddressError("Address");
      return;
    }
    setAddressError("");

    if (name === "phone" && value.length === 0) {
      setPhoneError("Phone");
      return;
    }
    setPhoneError("");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F1ECFF] to-[#E4EBFD] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Register
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">Join Us Today</p>

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
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
              onChange={handleInputChange}
            />
            {emailError && emailError === "Email" ? (
              <small className="text-red-500">{`${emailError} is invalid or missing`}</small>
            ) : (
              <></>
            )}
          </div>

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
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
            {
              nameError && nameError === "Name" ? (
                <small className="text-red-500">{`${nameError} is invalid or missing`}</small>
              ) : (
                <></>
              )
            }
          </div >

          <div>
            <label
              htmlFor="Address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              name="address"
              type="text"
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
            {
              addressError && addressError === "Address" ? (
                <small className="text-red-500">{`${addressError} is invalid or missing`}</small>
              ) : (
                <></>
              )
            }
          </div >
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              name="phone"
              type="text"
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
            />
            {
              phoneError && phoneError === "Phone" ? (
                <small className="text-red-500">{`${phoneError} is invalid or missing`}</small>
              ) : (
                <></>
              )
            }
          </div >
          <div className="flex justify-between items-center ">
            <p className="text-sm text-center text-gray-500 pr-4">
              Already part of us?
              <Link href="/login" className="text-primary font-semibold">
                Sign in
              </Link>
            </p>
            <Button variant="unique" size="xl" type="submit">
              Register
            </Button>
          </div>
        </form >
      </div >
    </div >
  );
};

export default Register;
