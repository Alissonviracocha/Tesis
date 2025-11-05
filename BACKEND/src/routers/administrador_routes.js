import {Router} from 'express'
import {actualizarPassword, comprobarTokenPasword, confirmarMail, crearNuevoPassword, login,
    perfil, recuperarPassword, registro } from '../controllers/administrador_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()

router.post('/registro',registro)
router.get('/confirmar/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)

router.post('/login',login)

router.get('/perfil',verificarTokenJWT,perfil)

router.put('/administrador/actualizarpassword/:id',verificarTokenJWT,actualizarPassword)    // cambie de esto '/actualizarpassword/:id' ---->   '/administrador/actualizarpassword/:id'

export default router
