"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _ClasificacionTienda = _interopRequireDefault(require("../controllers/ClasificacionTienda.controllers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _ClasificacionTienda.default();
router.post('/crear', controller.insertar);
router.get('/obtener', controller.buscar);
var _default = router;
exports.default = _default;