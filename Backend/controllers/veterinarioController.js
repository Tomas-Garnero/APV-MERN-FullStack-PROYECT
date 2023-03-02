const registrar = (req, res) => {

    const { nombre, email, password } = req.body;

    res.json({ msg: "Registrando usuario..."});
};

const perfil = (req, res) => {
    res.json({ msg: "Mostrando perfil..."});
};

export { registrar, perfil };