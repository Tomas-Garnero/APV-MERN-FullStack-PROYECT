import usePacientes from "../hook/usePacientes";
import Paciente from "./Paciente.jsx";

const ListadoPacientes = () => {

    const { pacientes } = usePacientes();

    return (
        <>
            {pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Administra tus 
                        <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
                    </p>
                    {pacientes.map(paciente => {
                        <Paciente
                            key={paciente._id}
                            paciente={paciente}
                        />
                    })}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">
                        Comienza Agregando Pacientes y apareceran 
                        <span className="text-indigo-600 font-bold"> en este Lugar</span>
                    </p>
                </>
            )}
        </>
    )
}

export default ListadoPacientes;