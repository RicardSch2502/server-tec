import { Router } from 'express';
import UsuariosController from '@controllers/Usuarios.controller';
import { verifyAuth } from '@middlewares/auth';
const router = Router();
const controller = new UsuariosController();

router.post('/crear', controller.insertar);
router.post('/login', controller.login);
router.get('/obtener', verifyAuth, controller.buscar);
router.put('/actualizar/:idusuario', controller.actualizar);
router.delete('/eliminar/:idusuario', controller.eliminar);

export default router;
