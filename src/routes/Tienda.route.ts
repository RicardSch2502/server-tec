import { Router } from 'express';
import TiendaController from '@controllers/Tienda.controller';
import { verifyAuth } from '@middlewares/auth';
const router = Router();
const controller = new TiendaController();

router.post('/crear', verifyAuth, controller.insertar);
router.get('/obtener', controller.buscar);
router.put('/actualizar/:idtiendas', controller.actualizar);
router.delete('/eliminar/:idtiendas', controller.eliminar);

export default router;
