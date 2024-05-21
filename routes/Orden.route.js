"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Orden = _interopRequireDefault(require("../controllers/Orden.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const controller = new _Orden.default();
router.post('/crear', controller.insertar);
router.put('/actualizar/:idorden', controller.actualizar);
router.delete('/eliminar/:idorden', controller.eliminar);
var _default = router;
exports.default = _default;