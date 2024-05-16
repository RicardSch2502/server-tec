import { Router } from 'express';
import IngredienteController from '@controllers/Ingrediente.controller';
const router = Router();
const controller = new IngredienteController();

router.post('/crear', controller.insertar);
router.put('/actualizar/:ingrediente', controller.actualizar);
router.delete('/eliminar/:ingrediente', controller.eliminar);

export default router;
