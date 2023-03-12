import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <>
            <h1>Es una Ruta Protegida</h1>
            <Outlet />
        </>
    )
}

export default RutaProtegida;