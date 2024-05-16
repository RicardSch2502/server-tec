import { Router } from 'express';
import ClasificacionTienda from '@controllers/ClasificacionTienda.controllers';

const router = Router();
const controller = new ClasificacionTienda();

router.post('/crear', controller.insertar);
router.get('/obtener', controller.buscar);

export default router;
