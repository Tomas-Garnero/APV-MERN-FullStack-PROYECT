import express from "express";
import { 
    registrar, 
    perfil, 
    confirmar, 
    auntenticar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword, 
    actualizarPerfil,
    actualizarPassword 
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", auntenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Area privada 
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id",checkAuth, actualizarPerfil);
router.put("/actualizar-password",checkAuth, actualizarPassword);


export default router;