import { Router } from 'express';
import CarritoController from '@controllers/Carrito.controller';
import { verifyAuth } from '@middlewares/auth';

const router = Router();
const controller = new CarritoController();

router.post('/crear', verifyAuth, controller.insertar);
router.delete('/eliminar/:id', verifyAuth,controller.eliminar);
router.get('/obtener', controller.obtener);


export default router;
