import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";

const CambiarPassword = () => {

    const [ alerta, setAlerta ] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
    }

    const { msg } = alerta;

    return (
        <>
            <AdminNav />
            <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu 
                <span className="text-indigo-600 font-bold"> Password aquí</span>
            </p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                    {msg && <Alerta alerta={alerta} />}
                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Password Actual</label>
                            <input
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="nombre"
                                placeholder="Escribe tu password actual"
                            />
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Nuevo Password</label>
                            <input
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="nombre"
                                placeholder="Escribe tu nueva Password"
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Actualizar Password"
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CambiarPassword