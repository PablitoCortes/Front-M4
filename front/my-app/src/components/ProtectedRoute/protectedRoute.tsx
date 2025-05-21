import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const localUser = localStorage.getItem("user");
                if (!localUser) {
                    router.push("/home");
                    return;
                }
                const parsedUser = JSON.parse(localUser);
                if (!parsedUser?.token) {
                    router.push("/home");
                    return;
                }
                setLoading(false);
            } catch (error) {
                router.push("/home");
            }
        };
        checkAuth();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primaryColor)]"></div>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;