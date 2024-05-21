"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Usuarios = _interopRequireDefault(require("./Usuarios.route"));
var _Tienda = _interopRequireDefault(require("./Tienda.route"));
var _Platillo = _interopRequireDefault(require("./Platillo.route"));
var _Ingrediente = _interopRequireDefault(require("./Ingrediente.route"));
var _Carrito = _interopRequireDefault(require("./Carrito.route"));
var _ClasificacionTienda = _interopRequireDefault(require("./ClasificacionTienda.route"));
var _menu = _interopRequireDefault(require("./menu.route"));
var _pagos = _interopRequireDefault(require("./pagos.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Orden from '@routes/Orden.routedeprecado';

const router = (0, _express.Router)();
router.use('/usuarios', _Usuarios.default);
router.use('/tienda', _Tienda.default);
router.use('/platillo', _Platillo.default);
// router.use('/orden', Orden);
router.use('/ingrediente', _Ingrediente.default);
router.use('/carrito', _Carrito.default);
router.use('/clasificacion-tienda', _ClasificacionTienda.default);
router.use('/menu', _menu.default);
router.use('/pagos', _pagos.default);
var _default = router;
exports.default = _default;