import { Outlet, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import useAuth from "../hook/useAuth";


const RutaProtegida = () => {

    const { auth, cargando } = useAuth();
    console.log(auth);
    console.log(cargando);

    if(cargando) return "Cargando...";

    return (
        <>
            <Header />
                {auth?._id ? (
                    <main className="container mx-auto mt-10">
                        <Outlet /> 
                    </main>
                ): <Navigate to="/" />
                }
            <Footer />
        </>
    )
}

export default RutaProtegida;