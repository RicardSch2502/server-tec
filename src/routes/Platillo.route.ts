import { Router } from 'express';
import PlatilloController from '@controllers/Platillo.controllers';
const router = Router();
const controller = new PlatilloController();

router.post('/crear', controller.insertar);
router.get('/obtener', controller.buscar);
router.get('/obtener/:id', controller.buscarUno);
router.put('/actualizar/:idplatillos', controller.actualizar);
router.delete('/eliminar/:idplatillos', controller.eliminar);

export default router;
