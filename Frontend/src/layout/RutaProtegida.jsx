import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();
    console.log(auth);
    console.log(cargando);

    if(cargando) return "Cargando...";

    return (
        <>
            <h1>Es una Ruta Protegida</h1>
            {auth?._id ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

export default RutaProtegida;