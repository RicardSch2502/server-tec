"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Carrito = _interopRequireDefault(require("../controllers/Carrito.controller"));
var _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _Carrito.default();
router.post('/crear', _auth.verifyAuth, controller.insertar);
router.delete('/eliminar/:id', _auth.verifyAuth, controller.eliminar);
router.get('/obtener', controller.obtener);
var _default = router;
exports.default = _default;