
const registrar = (req, res) => {
    res.json({ msg: "Registrando usuario..."});
};

const perfil = (req, res) => {
    res.json({ msg: "Mostrando perfil..."});
};

export { registrar, perfil };