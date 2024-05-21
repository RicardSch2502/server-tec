"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Usuarios = _interopRequireDefault(require("../controllers/Usuarios.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _Usuarios.default();
router.post('/crear', controller.insertar);
router.post('/login', controller.login);
router.get('/obtener', _auth.verifyAuth, controller.buscar);
router.put('/actualizar/:idusuario', controller.actualizar);
router.delete('/eliminar/:idusuario', controller.eliminar);
var _default = router;
exports.default = _default;