import { Router } from 'express'
import { registrarDocente, loginDocente, perfilDocente, actualizarPerfil, actualizarPassword,
    crearCalificacion, actualizarCalificacion, listarCalificaciones } from '../controllers/docentes_controller.js'

import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()


//router.post("/registro", registrarDocente);

router.post("docente/login", loginDocente);

router.get("docente/perfil", verificarTokenJWT, perfilDocente);
router.put("docente /actualizar/i:d", verificarTokenJWT, actualizarPerfil);
router.put("/actualizarpassword/:id", verificarTokenJWT, actualizarPassword);


router.post("/calificacion", verificarTokenJWT, crearCalificacion);
router.put("/calificacion/:id", verificarTokenJWT, actualizarCalificacion);
router.get("/calificaciones/:id", verificarTokenJWT, listarCalificaciones);


export default router