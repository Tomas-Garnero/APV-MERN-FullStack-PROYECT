import Paciente from "../models/Paciente.js";


const agregarPaciente = async (req, res) => {

    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;

    try {
        const pacienteAlmacenado = await paciente.save();
        res.json(pacienteAlmacenado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find().where("Veterinario").equals(req.veterinario);
    res.json(pacientes);
};

const obtenerPaciente = async (req, res) => {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    console.log(paciente);

    if(paciente.veterionario._id.toString() !== req.veterinario._id.toString()) {
        return res.json({msg: "Accion no valida"});
    }

    if(paciente) {
        res.json(paciente);
    }
};

const actualizarPaciente = async (req, res) => {

};

const eliminarPaciente = async (req, res) => {

};

export { agregarPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente };