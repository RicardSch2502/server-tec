import { Router } from 'express';
import Usuarios from '@routes/Usuarios.route';
import Tienda from '@routes/Tienda.route';
import Platillo from '@routes/Platillo.route';
// import Orden from '@routes/Orden.routedeprecado';
import Ingredientes from '@routes/Ingrediente.route';
import Carrito from '@routes/Carrito.route';
import ClasificacionTienda from '@routes/ClasificacionTienda.route';
import Menu from '@routes/menu.route';
import Pagos from '@routes/pagos.route';

const router = Router();
router.use('/usuarios', Usuarios);
router.use('/tienda', Tienda);
router.use('/platillo', Platillo);
// router.use('/orden', Orden);
router.use('/ingrediente', Ingredientes);
router.use('/carrito', Carrito);
router.use('/clasificacion-tienda', ClasificacionTienda);
router.use('/menu',Menu);
router.use('/pagos', Pagos);


export default router;
