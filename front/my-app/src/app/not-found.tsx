"use client"
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="mb-8">
                    <Image
                        src="/404.svg"
                        alt="404 Not Found"
                        width={400}
                        height={400}
                        className="mx-auto"
                    />
                </div>
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-6">¡Ups! Página no encontrada</h2>
                <p className="text-gray-500 mb-8">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
                <Link
                    href="/home"
                    className="inline-block bg-[var(--primaryColor)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
} 