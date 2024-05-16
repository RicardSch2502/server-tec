import { Router } from 'express';
import MenuController from '@controllers/menu.controller';

const router = Router();
const controller = new MenuController();

router.post("/crear", controller.crearMenu);
router.delete('/eliminar/:idmenus',controller.eliminar)

export default router;
