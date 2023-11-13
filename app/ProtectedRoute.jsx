"use client"
import {usePathname, useRouter} from "next/navigation";
import {UserAuth} from "@/app/context/AuthContext";
import {useEffect} from "react"

const ProtectedRoute = ({children}) => {

    // IMPORTANTES
    const location = usePathname();
    const router = useRouter();
    const { currentUser, isLoading } = UserAuth(); // Obtiene el estado de autenticación desde Firebase


    useEffect(() => {
        if (!isLoading && !currentUser) {
            router.push(`/sign-in?redirect=${location}`) // Redirige a la página de inicio de sesión si el usuario no está autenticado
        }
    }, [currentUser, router]);

    if (isLoading) {
        return <div className={"h-screen bg-blanco w-screen z-50 absolute"}></div>;
    }

    return <>{currentUser ? children : null}</>

};

export default ProtectedRoute;