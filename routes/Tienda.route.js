"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Tienda = _interopRequireDefault(require("../controllers/Tienda.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _Tienda.default();
router.post('/crear', _auth.verifyAuth, controller.insertar);
router.get('/obtener', controller.buscar);
router.put('/actualizar/:idtiendas', controller.actualizar);
router.delete('/eliminar/:idtiendas', controller.eliminar);
var _default = router;
exports.default = _default;